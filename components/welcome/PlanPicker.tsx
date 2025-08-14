'use client'

import { useOnboarding } from '@/stores/onboarding'
import { events } from '@/lib/analytics'
import type { DailyMinutes } from '@/types/user'

const timeOptions: DailyMinutes[] = [30, 45, 60]

export function PlanPicker() {
  const { dailyMinutes, setDailyMinutes } = useOnboarding()

  const handleSelect = (minutes: DailyMinutes) => {
    setDailyMinutes(minutes)
    if (minutes) {
      events.onboardingPlanSelect(minutes)
    }
  }

  return (
    <div className="bg-card rounded-card p-6 max-w-2xl mx-auto">
      <h3 className="text-lg font-semibold text-text mb-4">
        今日の学習時間を選ぶ
      </h3>
      <div className="flex gap-4 justify-center">
        {timeOptions.map((minutes) => (
          <label
            key={minutes}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="radio"
              name="dailyMinutes"
              value={minutes}
              checked={dailyMinutes === minutes}
              onChange={() => handleSelect(minutes)}
              className="w-4 h-4 text-primary focus:ring-primary"
            />
            <span className="text-text">{minutes}分</span>
          </label>
        ))}
      </div>
      {dailyMinutes && (
        <p className="text-sm text-muted mt-4 text-center">
          毎日{dailyMinutes}分の学習時間で設定されました
        </p>
      )}
    </div>
  )
}