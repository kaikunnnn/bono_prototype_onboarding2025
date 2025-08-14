'use client'

import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useOnboarding } from '@/stores/onboarding'
import { useRouter } from 'next/navigation'
import { events } from '@/lib/analytics'
import type { UserLevel } from '@/types/user'

const levels = [
  {
    id: 'beginner' as UserLevel,
    title: '完全初心者でこれからUIUXをはじめる',
    description: '動画のとおりにトレース＋穴埋めで安全に進めます。',
    href: '/courses/starter-uiux?level=beginner',
  },
  {
    id: 'experienced' as UserLevel,
    title: '経験者でUIUXを学びたいが内容は未定',
    description: '同じコース。毎日+αヒントを表示します。',
    href: '/courses/starter-uiux?level=experienced',
  },
  {
    id: 'custom' as UserLevel,
    title: 'やりたいことが決まっている',
    description: '必要な章へショートカット。',
    href: '/search',
  },
]

export function LevelCards() {
  const { level, setLevel } = useOnboarding()
  const router = useRouter()

  const handleSelect = (selectedLevel: UserLevel, href: string) => {
    setLevel(selectedLevel)
    events.onboardingLevelSelect(selectedLevel!)
    events.onboardingStartClick(selectedLevel!)
    router.push(href)
  }

  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {levels.map((item) => (
        <Card
          key={item.id}
          hover
          className={`relative ${
            level === item.id ? 'ring-2 ring-primary' : ''
          }`}
        >
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text">
              {item.title}
            </h3>
            <p className="text-muted text-sm">
              {item.description}
            </p>
            <Button
              onClick={() => handleSelect(item.id, item.href)}
              className="w-full"
            >
              {item.id === 'custom' ? '検索して探す' : '今すぐはじめる'}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  )
}