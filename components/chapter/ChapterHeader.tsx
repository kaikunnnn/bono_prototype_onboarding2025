import { Badge } from '@/components/ui/Badge'
import { formatTime } from '@/lib/utils'
import type { Chapter } from '@/types/course'

interface ChapterHeaderProps {
  chapter: Chapter
}

export function ChapterHeader({ chapter }: ChapterHeaderProps) {
  return (
    <div className="bg-card rounded-card p-6 mb-6">
      {/* Day表示 */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`
          inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-bold
          ${chapter.isSpecialDay ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'}
        `}>
          Day {chapter.day}
        </div>
        {chapter.isSpecialDay && (
          <Badge variant="warning">#progress 投稿日</Badge>
        )}
      </div>

      {/* タイトルとゴール */}
      <h1 className="text-2xl md:text-3xl font-bold text-text mb-3">
        {chapter.title}
      </h1>
      
      <p className="text-lg text-muted mb-4">
        {chapter.goal}
      </p>

      {/* メタ情報 */}
      <div className="grid md:grid-cols-3 gap-4 pt-4 border-t">
        <div>
          <p className="text-sm text-muted mb-1">所要時間</p>
          <p className="font-semibold text-text">{formatTime(chapter.timeEstimate)}</p>
        </div>
        
        {chapter.prerequisites.length > 0 && (
          <div>
            <p className="text-sm text-muted mb-1">前提条件</p>
            <p className="font-semibold text-text">{chapter.prerequisites.join(', ')}</p>
          </div>
        )}
        
        <div>
          <p className="text-sm text-muted mb-1">学習フロー</p>
          <div className="flex gap-2 flex-wrap">
            {chapter.flowStage.map((stage) => (
              <Badge key={stage} variant="info">
                {stage}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}