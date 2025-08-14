import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { UserLevel, DailyMinutes } from '@/types/user'

interface OnboardingStore {
  level: UserLevel
  dailyMinutes: DailyMinutes
  setLevel: (level: UserLevel) => void
  setDailyMinutes: (minutes: DailyMinutes) => void
  reset: () => void
}

export const useOnboarding = create<OnboardingStore>()(
  persist(
    (set) => ({
      level: null,
      dailyMinutes: null,
      setLevel: (level) => set({ level }),
      setDailyMinutes: (minutes) => set({ dailyMinutes: minutes }),
      reset: () => set({ level: null, dailyMinutes: null }),
    }),
    {
      name: 'bono-onboarding',
    }
  )
)