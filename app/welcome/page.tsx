'use client'

import { useEffect } from 'react'
import { WelcomeHero } from '@/components/welcome/WelcomeHero'
import { LevelCards } from '@/components/welcome/LevelCards'
import { PlanPicker } from '@/components/welcome/PlanPicker'
import { CommunityCTA } from '@/components/welcome/CommunityCTA'
import { events } from '@/lib/analytics'

export default function WelcomePage() {
  useEffect(() => {
    events.onboardingView()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        {/* Hero Section */}
        <WelcomeHero />
        
        {/* Level Selection */}
        <section className="mb-12">
          <LevelCards />
        </section>
        
        {/* Plan Picker */}
        <section className="mb-12">
          <PlanPicker />
        </section>
        
        {/* Community CTA */}
        <section className="mb-12">
          <CommunityCTA />
        </section>
        
        {/* Additional Info */}
        <section className="max-w-3xl mx-auto text-center space-y-2 text-sm text-muted">
          <p>
            フロー：ユーザー理解 → 要件設定 → UIモデリング → ビジュアル制作 を2週間で体験します。
          </p>
          <p>
            学習方法：毎日"今日の1枚"を作り、チェック3点を✓して進みます。
          </p>
        </section>
      </div>
    </div>
  )
}