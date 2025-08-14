'use client'

import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useRouter } from 'next/navigation'
import { formatTime } from '@/lib/utils'
import type { Chapter } from '@/types/course'

interface ChapterCardProps {
  chapter: Chapter
  isCompleted: boolean
  isCurrent: boolean
  level?: string | null
}

export function ChapterCard({ chapter, isCompleted, isCurrent, level }: ChapterCardProps) {
  const router = useRouter()

  const handleOpen = () => {
    router.push(`/courses/starter-uiux/chapters/${chapter.slug}`)
  }

  return (
    <Card hover className={isCurrent ? 'ring-2 ring-primary' : ''}>
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-text flex-1">
            {chapter.title}
          </h3>
          {isCompleted && (
            <span className="text-green-600 text-xl">✓</span>
          )}
        </div>

        <p className="text-sm text-muted">
          {chapter.goal}
        </p>

        <div className="flex flex-wrap gap-2">
          {chapter.flowStage.map((stage) => (
            <Badge key={stage} variant="info">
              {stage}
            </Badge>
          ))}
          {level === 'beginner' && (
            <Badge variant="success">初心者向けヒント</Badge>
          )}
          {level === 'experienced' && (
            <Badge variant="warning">+α課題あり</Badge>
          )}
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-sm text-muted">
            所要時間: {formatTime(chapter.timeEstimate)}
          </span>
          <Button size="sm" onClick={handleOpen}>
            {isCurrent ? '続きから' : '章を開く'}
          </Button>
        </div>
      </div>
    </Card>
  )
}