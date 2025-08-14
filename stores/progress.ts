import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ProgressStore {
  completedSlugs: Record<string, boolean>
  lastVisitedSlug: string | null
  checklistStates: Record<string, boolean[]>
  markCompleted: (slug: string) => void
  setLastVisited: (slug: string) => void
  updateChecklist: (slug: string, index: number, checked: boolean) => void
  getProgress: () => number
  reset: () => void
}

export const useProgress = create<ProgressStore>()(
  persist(
    (set, get) => ({
      completedSlugs: {},
      lastVisitedSlug: null,
      checklistStates: {},
      
      markCompleted: (slug) =>
        set((state) => ({
          completedSlugs: { ...state.completedSlugs, [slug]: true }
        })),
      
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
      
      getProgress: () => {
        const state = get()
        const completed = Object.keys(state.completedSlugs).filter(
          (key) => state.completedSlugs[key]
        ).length
        return completed
      },
      
      reset: () =>
        set({
          completedSlugs: {},
          lastVisitedSlug: null,
          checklistStates: {}
        }),
    }),
    {
      name: 'bono-progress',
    }
  )
)