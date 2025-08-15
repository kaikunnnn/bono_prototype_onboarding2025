import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

export function Card({ className, hover = false, padding = 'md', ...props }: CardProps) {
  const paddingClasses = {
    sm: 'p-space-3', // 24px
    md: 'p-space-4', // 32px
    lg: 'p-space-6', // 48px
  }

  return (
    <div
      className={cn(
        'bg-white border border-gray-200 rounded-card',
        paddingClasses[padding],
        hover && 'hover:shadow-lg transition-shadow duration-300 cursor-pointer',
        className
      )}
      {...props}
    />
  )
}