'use client'

import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useRouter } from 'next/navigation'
import { formatTime } from '@/lib/utils'
import type { Chapter } from '@/types/course'

interface DayChapterCardProps {
  day: number
  chapter: Chapter
  isCompleted: boolean
  isCurrent: boolean
  isLocked?: boolean
  level?: string | null
}

export function DayChapterCard({ 
  day, 
  chapter, 
  isCompleted, 
  isCurrent, 
  isLocked = false,
  level 
}: DayChapterCardProps) {
  const router = useRouter()

  const handleOpen = () => {
    if (!isLocked) {
      router.push(`/courses/starter-uiux/chapters/${chapter.slug}`)
    }
  }

  // Day7とDay14は特別な日
  const isSpecialDay = day === 7 || day === 14
  
  return (
    <div className="relative">
      {/* Day Label */}
      <div className="flex items-center gap-2 mb-2">
        <div className={`
          inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-bold
          ${isSpecialDay ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'}
        `}>
          Day {day}
        </div>
        {isSpecialDay && (
          <Badge variant="warning">
            #progress 投稿日
          </Badge>
        )}
        {isCompleted && (
          <Badge variant="success">完了</Badge>
        )}
        {isCurrent && (
          <Badge variant="info">現在の学習</Badge>
        )}
      </div>

      {/* Chapter Card */}
      <Card 
        hover={!isLocked}
        className={`
          ${isCurrent ? 'ring-2 ring-primary' : ''}
          ${isLocked ? 'opacity-60 cursor-not-allowed' : ''}
        `}
      >
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-semibold text-text flex-1">
              {chapter.title}
            </h3>
            {isCompleted && (
              <span className="text-green-600 text-xl">✓</span>
            )}
            {isLocked && (
              <span className="text-gray-400">🔒</span>
            )}
          </div>

          <p className="text-sm text-muted">
            {chapter.goal}
          </p>

          {/* Flow Stage Tags */}
          <div className="flex flex-wrap gap-2">
            {chapter.flowStage.map((stage) => (
              <Badge key={stage} variant="default">
                {stage}
              </Badge>
            ))}
          </div>

          {/* Checklist Preview */}
          <div className="border-t pt-3">
            <p className="text-xs text-muted mb-2">今日のタスク:</p>
            <ul className="space-y-1">
              {chapter.checklist.slice(0, 3).map((item, index) => (
                <li key={index} className="text-sm text-text flex items-start">
                  <span className="text-gray-400 mr-2">□</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-sm text-muted">
              所要時間: {formatTime(chapter.timeEstimate)}
            </span>
            <Button 
              size="sm" 
              onClick={handleOpen}
              disabled={isLocked}
            >
              {isCurrent ? '続きから' : isLocked ? 'ロック中' : '学習を開始'}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}