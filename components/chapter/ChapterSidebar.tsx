'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useRouter } from 'next/navigation'
import { useProgress } from '@/stores/progress'
import type { Chapter } from '@/types/course'

interface ChapterSidebarProps {
  chapters: Chapter[]
  currentSlug: string
  className?: string
}

export function ChapterSidebar({ chapters, currentSlug, className = '' }: ChapterSidebarProps) {
  const router = useRouter()
  const { completedSlugs } = useProgress()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleChapterClick = (slug: string) => {
    router.push(`/courses/starter-uiux/chapters/${slug}`)
  }

  if (isCollapsed) {
    return (
      <div className={`bg-card border-r border-border p-4 ${className}`}>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(false)}
          className="w-full"
        >
          📖
        </Button>
      </div>
    )
  }

  return (
    <div className={`bg-card border-r border-border ${className}`}>
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-text">章一覧</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(true)}
          >
            ←
          </Button>
        </div>
      </div>

      <div className="overflow-y-auto max-h-screen">
        {chapters.map((chapter) => {
          const isActive = chapter.slug === currentSlug
          const isCompleted = completedSlugs[chapter.slug]
          
          return (
            <button
              key={chapter.slug}
              onClick={() => handleChapterClick(chapter.slug)}
              className={`
                w-full text-left p-4 border-b border-border/50 
                hover:bg-gray-50 transition-colors
                ${isActive ? 'bg-primary/10 border-r-2 border-r-primary' : ''}
              `}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className={`
                    text-xs px-2 py-1 rounded-full font-medium
                    ${chapter.isSpecialDay 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 text-gray-600'
                    }
                  `}>
                    Day {chapter.day}
                  </span>
                  {isCompleted && (
                    <span className="text-green-600 text-sm">✓</span>
                  )}
                </div>
                
                <h4 className={`
                  text-sm font-medium line-clamp-2
                  ${isActive ? 'text-primary' : 'text-text'}
                `}>
                  {chapter.title}
                </h4>
                
                <div className="flex gap-1 flex-wrap">
                  {chapter.flowStage.slice(0, 2).map((stage) => (
                    <Badge 
                      key={stage} 
                      variant="default"
                      className="text-xs"
                    >
                      {stage}
                    </Badge>
                  ))}
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}