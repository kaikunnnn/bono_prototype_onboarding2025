import type { FlowStage } from '@/types/course'

interface FlowPillProps {
  currentStages: FlowStage[]
}

const allStages: FlowStage[] = ['ユーザー理解', '要件', 'UIモデリング', 'ビジュアル']

const stageColors = {
  'ユーザー理解': 'bg-purple-100 text-purple-700',
  '要件': 'bg-blue-100 text-blue-700',
  'UIモデリング': 'bg-green-100 text-green-700',
  'ビジュアル': 'bg-orange-100 text-orange-700',
}

export function FlowPill({ currentStages }: FlowPillProps) {
  return (
    <div className="bg-card rounded-card p-4 mb-6">
      <p className="text-sm text-muted mb-3">今日の学習工程</p>
      <div className="flex items-center gap-2">
        {allStages.map((stage, index) => {
          const isActive = currentStages.includes(stage)
          const isPassed = false // 将来的には過去の工程も表示
          
          return (
            <div key={stage} className="flex items-center">
              <div
                className={`
                  px-3 py-1 rounded-full text-xs font-medium transition-all
                  ${isActive 
                    ? stageColors[stage] 
                    : isPassed 
                      ? 'bg-gray-200 text-gray-600' 
                      : 'bg-gray-100 text-gray-400'
                  }
                `}
              >
                {stage}
              </div>
              {index < allStages.length - 1 && (
                <div 
                  className={`
                    w-4 h-0.5 mx-1
                    ${isActive || isPassed ? 'bg-gray-300' : 'bg-gray-200'}
                  `} 
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}