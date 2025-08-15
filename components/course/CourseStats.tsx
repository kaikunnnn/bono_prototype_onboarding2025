import { useProgress } from '@/stores/progress'

interface CourseStatsProps {
  completedDays: number
  totalDays: number
  completedChapters: number
  totalChapters: number
  estimatedTimeLeft: number
}

export function CourseStats({ 
  completedDays, 
  totalDays, 
  completedChapters, 
  totalChapters,
  estimatedTimeLeft 
}: CourseStatsProps) {
  const { getStats } = useProgress()
  const stats = getStats()
  const progress = Math.round((completedChapters / totalChapters) * 100)
  
  return (
    <div className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-card p-6 mb-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <p className="text-white/80 text-sm mb-1">進捗率</p>
          <p className="text-3xl font-bold">{progress}%</p>
        </div>
        <div>
          <p className="text-white/80 text-sm mb-1">学習ストリーク</p>
          <p className="text-3xl font-bold">{stats.currentStreak}日</p>
        </div>
        <div>
          <p className="text-white/80 text-sm mb-1">完了章</p>
          <p className="text-3xl font-bold">{completedChapters}/{totalChapters}</p>
        </div>
        <div>
          <p className="text-white/80 text-sm mb-1">総学習時間</p>
          <p className="text-3xl font-bold">{stats.totalStudyTime}分</p>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="mt-6">
        <div className="flex justify-between text-sm mb-2">
          <span>学習進捗</span>
          <span>{progress}% 完了</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-3">
          <div
            className="bg-white h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Additional Stats */}
      {stats.averageTimePerChapter > 0 && (
        <div className="mt-4 pt-4 border-t border-white/20">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-white/80">章あたり平均時間</p>
              <p className="font-semibold">{stats.averageTimePerChapter}分</p>
            </div>
            <div>
              <p className="text-white/80">残り予想時間</p>
              <p className="font-semibold">{estimatedTimeLeft}分</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}