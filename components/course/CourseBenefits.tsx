import { Card } from '@/components/ui/Card'

const benefits = [
  {
    icon: '🎯',
    title: '14日で完成',
    description: '毎日30-60分の学習で、UI/UXの基礎が身につく構成',
  },
  {
    icon: '✋',
    title: '手を動かして学ぶ',
    description: 'トレースや穴埋めで、実践的なスキルを習得',
  },
  {
    icon: '🔄',
    title: '体系的な学習フロー',
    description: 'ユーザー理解→要件設定→UIモデリング→ビジュアル制作',
  },
  {
    icon: '👥',
    title: 'コミュニティで成長',
    description: 'Day7とDay14で進捗共有、仲間と一緒に学習',
  },
]

const outcomes = [
  'ダメなUIを見極める目が養われる',
  'ユーザー視点で優先順位を決められる',
  'Figmaの基本操作をマスター',
  '一貫性のあるUIが作れるようになる',
]

export function CourseBenefits() {
  return (
    <div className="mb-12">
      {/* Hero Section */}
      <div className="text-center mb-12 py-8 bg-gradient-to-b from-blue-50 to-white rounded-card">
        <h2 className="text-3xl font-bold text-text mb-4">
          なぜこのコースを選ぶべきか？
        </h2>
        <p className="text-lg text-muted max-w-3xl mx-auto">
          独学でUI/UXを学ぶのは難しい。このコースなら、<br />
          <strong className="text-text">14日間の実践的なカリキュラム</strong>で、
          デザインの基礎から応用まで体系的に身につきます。
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {benefits.map((benefit, index) => (
          <Card key={index} className="text-center">
            <div className="text-4xl mb-3">{benefit.icon}</div>
            <h3 className="font-semibold text-text mb-2">{benefit.title}</h3>
            <p className="text-sm text-muted">{benefit.description}</p>
          </Card>
        ))}
      </div>

      {/* Learning Path */}
      <div className="bg-card rounded-card p-8 mb-12">
        <h3 className="text-2xl font-semibold text-text mb-6 text-center">
          14日間の学習パス
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">
              1
            </div>
            <h4 className="font-semibold text-text mb-1">Day 1-3</h4>
            <p className="text-sm text-muted">UIトレース基礎</p>
          </div>
          <div className="text-center">
            <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">
              2
            </div>
            <h4 className="font-semibold text-text mb-1">Day 4-5</h4>
            <p className="text-sm text-muted">ユーザー理解</p>
          </div>
          <div className="text-center">
            <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">
              3
            </div>
            <h4 className="font-semibold text-text mb-1">Day 6-11</h4>
            <p className="text-sm text-muted">情報設計とリデザイン</p>
          </div>
          <div className="text-center">
            <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">
              4
            </div>
            <h4 className="font-semibold text-text mb-1">Day 12-14</h4>
            <p className="text-sm text-muted">ビジュアル完成</p>
          </div>
        </div>
      </div>

      {/* Expected Outcomes */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-card p-8">
        <h3 className="text-2xl font-semibold text-text mb-6">
          このコースを終えると...
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {outcomes.map((outcome, index) => (
            <div key={index} className="flex items-start">
              <span className="text-green-600 mr-3 mt-1">✓</span>
              <p className="text-text">{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}