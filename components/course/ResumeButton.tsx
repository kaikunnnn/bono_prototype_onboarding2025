'use client'

import { Button } from '@/components/ui/Button'
import { useRouter } from 'next/navigation'
import { events } from '@/lib/analytics'

interface ResumeButtonProps {
  lastVisitedSlug: string | null
}

export function ResumeButton({ lastVisitedSlug }: ResumeButtonProps) {
  const router = useRouter()

  if (!lastVisitedSlug) return null

  const handleResume = () => {
    events.resumeClick(lastVisitedSlug)
    router.push(`/courses/starter-uiux/chapters/${lastVisitedSlug}`)
  }

  return (
    <div className="bg-primary/10 rounded-card p-4 mb-6 flex items-center justify-between">
      <span className="text-text">
        前回の学習を続けますか？
      </span>
      <Button onClick={handleResume}>
        前回の続きから
      </Button>
    </div>
  )
}