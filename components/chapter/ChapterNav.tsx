'use client'

import { Button } from '@/components/ui/Button'
import { useRouter } from 'next/navigation'
import { events } from '@/lib/analytics'
import { useProgress } from '@/stores/progress'

interface ChapterNavProps {
  currentSlug: string
  prevSlug: string | null
  nextSlug: string | null
  isCompleted?: boolean
}

export function ChapterNav({ 
  currentSlug, 
  prevSlug, 
  nextSlug, 
  isCompleted = false 
}: ChapterNavProps) {
  const router = useRouter()
  const { markCompleted, setLastVisited } = useProgress()

  const handleNext = () => {
    if (nextSlug) {
      // 現在の章を完了としてマーク
      markCompleted(currentSlug)
      setLastVisited(nextSlug)
      
      events.nextClick(currentSlug, nextSlug)
      router.push(`/courses/starter-uiux/chapters/${nextSlug}`)
    } else {
      // 最後の章の場合
      markCompleted(currentSlug)
      events.progressComplete('starter-uiux')
      router.push('/courses/starter-uiux')
    }
  }

  const handlePrev = () => {
    if (prevSlug) {
      setLastVisited(prevSlug)
      router.push(`/courses/starter-uiux/chapters/${prevSlug}`)
    }
  }

  const handleBackToCourse = () => {
    router.push('/courses/starter-uiux')
  }

  return (
    <div className="sticky bottom-0 bg-background border-t border-border p-4">
      <div className="container flex items-center justify-between">
        {/* 左側: 戻るボタン */}
        <div className="flex gap-2">
          <Button 
            variant="secondary" 
            onClick={handleBackToCourse}
          >
            ← コース一覧
          </Button>
          {prevSlug && (
            <Button 
              variant="ghost" 
              onClick={handlePrev}
            >
              前の章
            </Button>
          )}
        </div>

        {/* 右側: 次へボタン */}
        <div>
          {nextSlug ? (
            <Button 
              onClick={handleNext}
              className="min-w-24"
            >
              次の章へ →
            </Button>
          ) : (
            <Button 
              onClick={handleNext}
              className="min-w-24"
              variant={isCompleted ? "default" : "secondary"}
            >
              コース完了 🎉
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}