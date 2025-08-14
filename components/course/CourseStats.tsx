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
  const progress = Math.round((completedChapters / totalChapters) * 100)
  
  return (
    <div className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-card p-6 mb-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <p className="text-white/80 text-sm mb-1">進捗率</p>
          <p className="text-3xl font-bold">{progress}%</p>
        </div>
        <div>
          <p className="text-white/80 text-sm mb-1">完了日数</p>
          <p className="text-3xl font-bold">{completedDays}/{totalDays}</p>
        </div>
        <div>
          <p className="text-white/80 text-sm mb-1">完了章</p>
          <p className="text-3xl font-bold">{completedChapters}/{totalChapters}</p>
        </div>
        <div>
          <p className="text-white/80 text-sm mb-1">残り時間</p>
          <p className="text-3xl font-bold">{estimatedTimeLeft}分</p>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="mt-6">
        <div className="w-full bg-white/20 rounded-full h-3">
          <div
            className="bg-white h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}