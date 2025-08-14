'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { useRouter } from 'next/navigation'
import seedData from '@/data/seed.json'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const router = useRouter()
  const { chapters } = seedData

  const filteredChapters = chapters.filter((chapter) =>
    chapter.title.toLowerCase().includes(query.toLowerCase()) ||
    chapter.goal.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <h1 className="text-3xl font-bold text-text mb-8">章を検索</h1>

        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="キーワードを入力..."
              className="flex-1 px-4 py-2 border border-border rounded-button focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button>検索</Button>
          </div>
        </div>

        {query && (
          <div className="max-w-4xl mx-auto">
            <p className="text-muted mb-4">
              "{query}" の検索結果: {filteredChapters.length}件
            </p>
            <div className="grid gap-4">
              {filteredChapters.map((chapter) => (
                <Card
                  key={chapter.slug}
                  hover
                  onClick={() => router.push(`/courses/starter-uiux/chapters/${chapter.slug}`)}
                >
                  <h3 className="font-semibold text-text mb-2">
                    {chapter.title}
                  </h3>
                  <p className="text-sm text-muted">
                    {chapter.goal}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}