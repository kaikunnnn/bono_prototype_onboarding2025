import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BONO - UI/UXスターターレッスン',
  description: '14日間で学ぶUI/UXデザインの基礎',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}