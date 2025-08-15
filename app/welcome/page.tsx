'use client'

import { useEffect } from 'react'
import { WelcomeHero } from '@/components/welcome/WelcomeHero'
import { LevelCards } from '@/components/welcome/LevelCards'
import { PlanPicker } from '@/components/welcome/PlanPicker'
import { CommunityCTA } from '@/components/welcome/CommunityCTA'
import { Section } from '@/components/ui/Section'
import { events } from '@/lib/analytics'

export default function WelcomePage() {
  useEffect(() => {
    events.onboardingView()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Section padding="hero">
        <WelcomeHero />
      </Section>
      
      {/* Level Selection */}
      <Section>
        <LevelCards />
      </Section>
      
      {/* Plan Picker */}
      <Section>
        <PlanPicker />
      </Section>
      
      {/* Community CTA */}
      <Section>
        <CommunityCTA />
      </Section>
      
      {/* Additional Info */}
      <Section padding="small">
        <div className="max-w-3xl mx-auto text-center space-y-space-2">
          <p className="body-description">
            フロー：ユーザー理解 → 要件設定 → UIモデリング → ビジュアル制作 を2週間で体験します。
          </p>
          <p className="body-description">
            学習方法：毎日"今日の1枚"を作り、チェック3点を✓して進みます。
          </p>
        </div>
      </Section>
    </div>
  )
}