import { type ClassValue, clsx } from 'clsx'

// 複数のクラス名を結合するユーティリティ
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

// 時間表示のフォーマット
export function formatTime(minutes: number): string {
  if (minutes < 60) {
    return `${minutes}分`
  }
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return mins > 0 ? `${hours}時間${mins}分` : `${hours}時間`
}

// 進捗率の計算
export function calculateProgress(completed: number, total: number): number {
  if (total === 0) return 0
  return Math.round((completed / total) * 100)
}