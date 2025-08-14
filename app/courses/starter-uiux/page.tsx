'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { CourseHeader } from '@/components/course/CourseHeader'
import { ChapterCard } from '@/components/course/ChapterCard'
import { ResumeButton } from '@/components/course/ResumeButton'
import { useProgress } from '@/stores/progress'
import { events } from '@/lib/analytics'
import seedData from '@/data/seed.json'

export default function StarterCoursePage() {
  const searchParams = useSearchParams()
  const level = searchParams.get('level')
  const { completedSlugs, lastVisitedSlug, getProgress } = useProgress()
  const progress = getProgress()

  useEffect(() => {
    events.courseView('starter-uiux')
  }, [])

  const { course, chapters } = seedData

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <CourseHeader
          title={course.title}
          description={course.description}
          progress={progress}
          totalChapters={chapters.length}
        />

        <ResumeButton lastVisitedSlug={lastVisitedSlug} />

        <div className="grid gap-6">
          {chapters.map((chapter) => (
            <ChapterCard
              key={chapter.slug}
              chapter={chapter}
              isCompleted={completedSlugs[chapter.slug] || false}
              isCurrent={chapter.slug === lastVisitedSlug}
              level={level}
            />
          ))}
        </div>
      </div>
    </div>
  )
}