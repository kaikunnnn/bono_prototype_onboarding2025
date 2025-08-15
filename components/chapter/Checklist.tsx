'use client'

import { useProgress } from '@/stores/progress'
import { events } from '@/lib/analytics'

interface ChecklistProps {
  chapterSlug: string
  items: string[]
}

export function Checklist({ chapterSlug, items }: ChecklistProps) {
  const { checklistStates, updateChecklist } = useProgress()
  const currentState = checklistStates[chapterSlug] || []

  const handleCheck = (index: number, checked: boolean) => {
    updateChecklist(chapterSlug, index, checked)
    events.checklistCheck(chapterSlug, index, checked)
  }

  const completedCount = currentState.filter(Boolean).length

  return (
    <div className="bg-card rounded-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-text">今日のチェックリスト</h3>
        <span className="text-sm text-muted">
          {completedCount} / {items.length} 完了
        </span>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => {
          const isChecked = currentState[index] || false
          
          return (
            <label
              key={index}
              className="flex items-start gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => handleCheck(index, e.target.checked)}
                className="mt-1 w-4 h-4 text-primary focus:ring-primary rounded"
              />
              <span 
                className={`
                  text-sm transition-all group-hover:text-text
                  ${isChecked 
                    ? 'text-gray-500 line-through' 
                    : 'text-text'
                  }
                `}
              >
                {item}
              </span>
            </label>
          )
        })}
      </div>

      {/* 進捗バー */}
      <div className="mt-4 pt-4 border-t">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${(completedCount / items.length) * 100}%` }}
          />
        </div>
      </div>

      {/* 完了メッセージ */}
      {completedCount === items.length && (
        <div className="mt-4 p-3 bg-green-50 rounded-lg">
          <p className="text-sm text-green-700 font-medium">
            ✓ すべてのタスクが完了しました！
          </p>
        </div>
      )}
    </div>
  )
}