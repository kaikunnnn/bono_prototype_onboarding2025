'use client'

import { Button } from '@/components/ui/Button'
import { events } from '@/lib/analytics'

const COMMUNITY_URL = 'https://community.bono.app/progress' // ダミーURL

export function CommunityCTA() {
  const handleJoin = () => {
    events.communityJoinClick()
    window.open(COMMUNITY_URL, '_blank')
  }

  return (
    <div className="bg-card rounded-card p-6 max-w-2xl mx-auto text-center">
      <h3 className="text-lg font-semibold text-text mb-2">
        コミュニティに参加
      </h3>
      <p className="text-muted text-sm mb-4">
        Day7 と Day14 にスクショ＋ひと言で投稿します。
      </p>
      <Button onClick={handleJoin} variant="secondary">
        #progress に参加
      </Button>
    </div>
  )
}