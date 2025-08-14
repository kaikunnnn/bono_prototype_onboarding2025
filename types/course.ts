export interface Course {
  id: string
  title: string
  description: string
  tags: string[]
  author: string
  chapters: string[]
}

export interface Chapter {
  slug: string
  title: string
  goal: string
  timeEstimate: number
  prerequisites: string[]
  flowStage: FlowStage[]
  checklist: string[]
  assets: Asset[]
  isFree: boolean
  nextSlug: string | null
  prevSlug: string | null
}

export type FlowStage = 'ユーザー理解' | '要件' | 'UIモデリング' | 'ビジュアル'

export interface Asset {
  type: 'figma' | 'image' | 'video'
  url: string
}