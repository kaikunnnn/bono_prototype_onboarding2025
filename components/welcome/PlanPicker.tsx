'use client'

import { useOnboarding } from '@/stores/onboarding'
import { events } from '@/lib/analytics'
import { Card } from '@/components/ui/Card'
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
    <Card padding="lg" className="max-w-2xl mx-auto">
      <div className="space-y-space-3">
        <h3 className="heading-component text-center">
          今日の学習時間を選ぶ
        </h3>
        <div className="flex gap-space-3 justify-center">
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
                className="w-4 h-4 text-black focus:ring-black"
              />
              <span className="body-feature">{minutes}分</span>
            </label>
          ))}
        </div>
        {dailyMinutes && (
          <p className="body-description text-center">
            毎日{dailyMinutes}分の学習時間で設定されました
          </p>
        )}
      </div>
    </Card>
  )
}