import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ProgressStore {
  completedSlugs: Record<string, boolean>
  lastVisitedSlug: string | null
  checklistStates: Record<string, boolean[]>
  completedDates: Record<string, string> // slug -> ISO date string
  studyTime: Record<string, number> // slug -> minutes spent
  streakCount: number
  lastStudyDate: string | null
  markCompleted: (slug: string) => void
  setLastVisited: (slug: string) => void
  updateChecklist: (slug: string, index: number, checked: boolean) => void
  recordStudyTime: (slug: string, minutes: number) => void
  updateStreak: () => void
  getProgress: () => number
  getStats: () => {
    totalCompleted: number
    totalStudyTime: number
    averageTimePerChapter: number
    currentStreak: number
  }
  reset: () => void
}

export const useProgress = create<ProgressStore>()(
  persist(
    (set, get) => ({
      completedSlugs: {},
      lastVisitedSlug: null,
      checklistStates: {},
      completedDates: {},
      studyTime: {},
      streakCount: 0,
      lastStudyDate: null,
      
      markCompleted: (slug) => {
        const today = new Date().toISOString().split('T')[0]
        set((state) => ({
          completedSlugs: { ...state.completedSlugs, [slug]: true },
          completedDates: { ...state.completedDates, [slug]: today }
        }))
        // Update streak when completing a chapter
        get().updateStreak()
      },
      
      setLastVisited: (slug) =>
        set({ lastVisitedSlug: slug }),
      
      updateChecklist: (slug, index, checked) =>
        set((state) => {
          const currentChecklist = state.checklistStates[slug] || []
          const newChecklist = [...currentChecklist]
          newChecklist[index] = checked
          return {
            checklistStates: {
              ...state.checklistStates,
              [slug]: newChecklist
            }
          }
        }),
      
      recordStudyTime: (slug, minutes) =>
        set((state) => ({
          studyTime: { 
            ...state.studyTime, 
            [slug]: (state.studyTime[slug] || 0) + minutes 
          }
        })),
      
      updateStreak: () => {
        const today = new Date().toISOString().split('T')[0]
        set((state) => {
          const { lastStudyDate } = state
          
          if (!lastStudyDate) {
            // First time studying
            return {
              streakCount: 1,
              lastStudyDate: today
            }
          }
          
          const lastDate = new Date(lastStudyDate)
          const todayDate = new Date(today)
          const diffTime = todayDate.getTime() - lastDate.getTime()
          const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
          
          if (diffDays === 1) {
            // Consecutive day
            return {
              streakCount: state.streakCount + 1,
              lastStudyDate: today
            }
          } else if (diffDays === 0) {
            // Same day, keep current streak
            return state
          } else {
            // Streak broken
            return {
              streakCount: 1,
              lastStudyDate: today
            }
          }
        })
      },
      
      getProgress: () => {
        const state = get()
        const completed = Object.keys(state.completedSlugs).filter(
          (key) => state.completedSlugs[key]
        ).length
        return completed
      },
      
      getStats: () => {
        const state = get()
        const totalCompleted = Object.keys(state.completedSlugs).filter(
          (key) => state.completedSlugs[key]
        ).length
        const totalStudyTime = Object.values(state.studyTime).reduce(
          (acc, time) => acc + time, 0
        )
        const averageTimePerChapter = totalCompleted > 0 
          ? Math.round(totalStudyTime / totalCompleted) 
          : 0
        
        return {
          totalCompleted,
          totalStudyTime,
          averageTimePerChapter,
          currentStreak: state.streakCount
        }
      },
      
      reset: () =>
        set({
          completedSlugs: {},
          lastVisitedSlug: null,
          checklistStates: {},
          completedDates: {},
          studyTime: {},
          streakCount: 0,
          lastStudyDate: null
        }),
    }),
    {
      name: 'bono-progress',
    }
  )
)