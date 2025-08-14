import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export function Card({ className, hover = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-card border border-border rounded-card p-space-3',
        hover && 'hover:shadow-lg transition-shadow cursor-pointer',
        className
      )}
      {...props}
    />
  )
}