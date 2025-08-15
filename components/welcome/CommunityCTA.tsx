'use client'

import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { events } from '@/lib/analytics'

const COMMUNITY_URL = 'https://community.bono.app/progress' // ダミーURL

export function CommunityCTA() {
  const handleJoin = () => {
    events.communityJoinClick()
    window.open(COMMUNITY_URL, '_blank')
  }

  return (
    <Card padding="lg" className="max-w-2xl mx-auto text-center">
      <div className="space-y-space-3">
        <h3 className="heading-component">
          コミュニティに参加
        </h3>
        <p className="body-description">
          Day7 と Day14 にスクショ＋ひと言で投稿します。
        </p>
        <Button onClick={handleJoin} variant="secondary">
          #progress に参加
        </Button>
      </div>
    </Card>
  )
}