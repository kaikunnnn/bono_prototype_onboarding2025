'use client'

import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import { ChapterHeader } from '@/components/chapter/ChapterHeader'
import { FlowPill } from '@/components/chapter/FlowPill'
import { Checklist } from '@/components/chapter/Checklist'
import { ChapterNav } from '@/components/chapter/ChapterNav'
import { ChapterSidebar } from '@/components/chapter/ChapterSidebar'
import { useProgress } from '@/stores/progress'
import { events } from '@/lib/analytics'
import seedData from '@/data/seed-updated.json'

interface ChapterPageProps {
  params: {
    slug: string
  }
}

export default function ChapterPage({ params }: ChapterPageProps) {
  const { setLastVisited, completedSlugs } = useProgress()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  
  const { chapters } = seedData
  const chapter = chapters.find((ch) => ch.slug === params.slug)

  useEffect(() => {
    if (chapter) {
      setLastVisited(chapter.slug)
      events.chapterView(chapter.slug)
    }
  }, [chapter, setLastVisited])

  if (!chapter) {
    notFound()
  }

  const isCompleted = completedSlugs[chapter.slug] || false

  return (
    <div className="min-h-screen bg-background flex">
      {/* サイドバー（デスクトップ） */}
      <div className="hidden lg:block w-80 flex-shrink-0">
        <ChapterSidebar 
          chapters={chapters} 
          currentSlug={chapter.slug}
          className="fixed w-80 h-screen"
        />
      </div>

      {/* モバイル用サイドバー */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div 
            className="flex-1 bg-black/50" 
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className="w-80 bg-background">
            <ChapterSidebar 
              chapters={chapters} 
              currentSlug={chapter.slug}
              className="h-full"
            />
          </div>
        </div>
      )}

      {/* メインコンテンツ */}
      <div className="flex-1 pb-20">
        <div className="container py-6">
          {/* モバイル用ヘッダー */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="flex items-center gap-2 text-muted hover:text-text"
            >
              <span>📖</span>
              <span>章一覧</span>
            </button>
          </div>

          {/* 章ヘッダー */}
          <ChapterHeader chapter={chapter} />

          {/* フロー表示 */}
          <FlowPill currentStages={chapter.flowStage} />

          {/* MDXコンテンツエリア */}
          <div className="bg-card rounded-card p-8 mb-6">
            <div className="prose prose-slate max-w-none">
              {/* 仮のコンテンツ - 実際はMDXをレンダリング */}
              <h2>Start（今日のゴール）</h2>
              <p>
                今日は<strong>ダメなUI</strong>を一緒にリデザインします。
                トレースを通して、使いやすさと見た目の両立を体感しましょう。
              </p>
              
              <h3>今日の1枚</h3>
              <p>トレース前後の比較スクリーンショット</p>

              <hr />

              <h2>Do（本編：{chapter.timeEstimate}分）</h2>

              <h3>手順1: Figmaファイルを開く（5分）</h3>
              {chapter.assets.length > 0 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
                  <p className="font-medium text-blue-800 mb-2">📎 Figmaファイル</p>
                  <a 
                    href={chapter.assets[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Figmaファイルを開く →
                  </a>
                </div>
              )}

              <ol>
                <li>上記リンクからFigmaファイルを開きます</li>
                <li><code>Reference</code> レイヤーを表示します</li>
                <li><code>Before</code> と <code>After</code> を比較してみましょう</li>
              </ol>

              <blockquote>
                <p>💡 <strong>初心者向けヒント</strong>: Figmaが初めての方は、左パネルのレイヤーをクリックして要素を選択できます。</p>
              </blockquote>

              <h3>手順2: ホバー状態を追加（15分）</h3>
              <p><strong>問題点</strong>: 元のUIはボタンがクリックできるかわからない</p>
              <p><strong>解決策</strong>: ホバー時の見た目を追加する</p>

              <ol>
                <li>ボタンを選択</li>
                <li>右パネルで <code>Prototype</code> タブを開く</li>
                <li><code>+</code> ボタンをクリックして <code>While hovering</code> を選択</li>
                <li>色を少し濃くする（例: <code>#2563EB</code> → <code>#1d4ed8</code>）</li>
              </ol>

              <h3>手順3: 優先度に応じた構造調整（15分）</h3>
              <p><strong>問題点</strong>: 重要な要素が目立たない</p>
              <p><strong>解決策</strong>: 文字サイズと配置で優先度を表現</p>

              <h3>手順4: 見た目を整える（10分）</h3>
              <p><strong>問題点</strong>: 全体的にバラバラな印象</p>
              <p><strong>解決策</strong>: 統一感のあるスタイルを適用</p>

              <hr />

              <h2>Close（振り返り：5分）</h2>

              <h3>ミニふりかえり</h3>
              <p>今日の学びを50字以内で記録しましょう：</p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <textarea 
                  placeholder="例：ホバー状態を追加するだけで、ボタンが押せることが分かりやすくなった"
                  className="w-full p-3 border rounded-md resize-none"
                  rows={3}
                />
              </div>

              {chapter.isSpecialDay && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-4">
                  <h4 className="font-medium text-yellow-800 mb-2">📱 #progress 投稿</h4>
                  <p className="text-yellow-700 text-sm">
                    今日は投稿日です！学習成果をコミュニティで共有しましょう。
                  </p>
                  <button className="mt-2 px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors">
                    投稿テンプレートを開く
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* チェックリスト */}
          <Checklist 
            chapterSlug={chapter.slug}
            items={chapter.checklist}
          />
        </div>
      </div>

      {/* ナビゲーション（固定） */}
      <ChapterNav
        currentSlug={chapter.slug}
        prevSlug={chapter.prevSlug}
        nextSlug={chapter.nextSlug}
        isCompleted={isCompleted}
      />
    </div>
  )
}