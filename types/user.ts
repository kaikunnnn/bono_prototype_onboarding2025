export type UserLevel = 'beginner' | 'experienced' | 'custom' | null
export type DailyMinutes = 30 | 45 | 60 | null

export interface OnboardingState {
  level: UserLevel
  dailyMinutes: DailyMinutes
}

export interface ProgressState {
  completedSlugs: Record<string, boolean>
  lastVisitedSlug: string | null
  checklistStates: Record<string, boolean[]>
}