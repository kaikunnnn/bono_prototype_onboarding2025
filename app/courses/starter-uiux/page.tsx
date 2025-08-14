'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { CourseHeader } from '@/components/course/CourseHeader'
import { CourseBenefits } from '@/components/course/CourseBenefits'
import { CourseStats } from '@/components/course/CourseStats'
import { DayChapterCard } from '@/components/course/DayChapterCard'
import { ResumeButton } from '@/components/course/ResumeButton'
import { Button } from '@/components/ui/Button'
import { useProgress } from '@/stores/progress'
import { useOnboarding } from '@/stores/onboarding'
import { events } from '@/lib/analytics'
import seedData from '@/data/seed-updated.json'

export default function StarterCoursePage() {
  const searchParams = useSearchParams()
  const level = searchParams.get('level')
  const { completedSlugs, lastVisitedSlug, getProgress } = useProgress()
  const { dailyMinutes } = useOnboarding()
  const [showBenefits, setShowBenefits] = useState(true)
  const progress = getProgress()

  useEffect(() => {
    events.courseView('starter-uiux')
  }, [])

  const { course, chapters } = seedData

  // 完了した日数を計算
  const completedDays = chapters.filter(ch => 
    completedSlugs[ch.slug]
  ).map(ch => ch.day).filter((v, i, a) => a.indexOf(v) === i).length

  // 残り時間を計算
  const remainingTime = chapters
    .filter(ch => !completedSlugs[ch.slug])
    .reduce((acc, ch) => acc + ch.timeEstimate, 0)

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        {/* コースヘッダー */}
        <CourseHeader
          title={course.title}
          description={course.description}
          progress={progress}
          totalChapters={chapters.length}
        />

        {/* 統計情報 */}
        <CourseStats
          completedDays={completedDays}
          totalDays={14}
          completedChapters={progress}
          totalChapters={chapters.length}
          estimatedTimeLeft={remainingTime}
        />

        {/* 前回の続きボタン */}
        <ResumeButton lastVisitedSlug={lastVisitedSlug} />

        {/* タブ切り替え */}
        <div className="flex gap-4 mb-8 border-b">
          <button
            onClick={() => setShowBenefits(false)}
            className={`pb-3 px-1 font-semibold transition-colors ${
              !showBenefits 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-muted hover:text-text'
            }`}
          >
            学習内容（Day 1-14）
          </button>
          <button
            onClick={() => setShowBenefits(true)}
            className={`pb-3 px-1 font-semibold transition-colors ${
              showBenefits 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-muted hover:text-text'
            }`}
          >
            コースの特徴とメリット
          </button>
        </div>

        {showBenefits ? (
          /* メリット表示 */
          <CourseBenefits />
        ) : (
          /* Day形式の章一覧 */
          <div>
            {/* 学習時間の確認 */}
            {dailyMinutes && (
              <div className="bg-blue-50 rounded-card p-4 mb-8 text-center">
                <p className="text-text">
                  あなたの1日の学習時間: <strong>{dailyMinutes}分</strong>
                </p>
                <p className="text-sm text-muted mt-1">
                  この時間に合わせて、今日のタスクを調整します
                </p>
              </div>
            )}

            {/* 章カード一覧 */}
            <div className="space-y-6">
              {chapters.map((chapter) => {
                const isLocked = false // 将来的にはロック機能を実装
                const isCurrent = chapter.slug === lastVisitedSlug
                const isCompleted = completedSlugs[chapter.slug] || false

                return (
                  <DayChapterCard
                    key={chapter.slug}
                    day={chapter.day}
                    chapter={chapter}
                    isCompleted={isCompleted}
                    isCurrent={isCurrent}
                    isLocked={isLocked}
                    level={level}
                  />
                )
              })}
            </div>

            {/* 完了メッセージ */}
            {progress === chapters.length && (
              <div className="mt-12 text-center bg-gradient-to-r from-green-50 to-blue-50 rounded-card p-8">
                <h2 className="text-2xl font-bold text-text mb-4">
                  🎉 おめでとうございます！
                </h2>
                <p className="text-lg text-muted mb-6">
                  14日間のスターターレッスンを完了しました。
                </p>
                <Button size="lg">
                  次のコースへ進む
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}