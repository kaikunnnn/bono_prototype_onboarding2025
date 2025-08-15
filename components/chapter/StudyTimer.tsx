'use client'

import { useState, useEffect } from 'react'
import { useProgress } from '@/stores/progress'

interface StudyTimerProps {
  chapterSlug: string
}

export function StudyTimer({ chapterSlug }: StudyTimerProps) {
  const [startTime, setStartTime] = useState<number | null>(null)
  const [elapsedTime, setElapsedTime] = useState(0)
  const { recordStudyTime } = useProgress()

  useEffect(() => {
    // コンポーネントマウント時に開始時間を記録
    const now = Date.now()
    setStartTime(now)

    // 10秒ごとに経過時間を更新
    const interval = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - now) / 1000))
    }, 10000)

    // クリーンアップ時に学習時間を記録
    return () => {
      clearInterval(interval)
      if (startTime) {
        const studyMinutes = Math.round((Date.now() - now) / (1000 * 60))
        if (studyMinutes > 0) {
          recordStudyTime(chapterSlug, studyMinutes)
        }
      }
    }
  }, [chapterSlug, recordStudyTime, startTime])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="text-sm text-muted">
      📖 学習時間: {formatTime(elapsedTime)}
    </div>
  )
}