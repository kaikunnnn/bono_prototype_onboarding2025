'use client'

import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  showArrow?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', showArrow, children, ...props }, ref) => {
    const variants = {
      primary: 'bg-black text-white hover:bg-gray-800',
      secondary: 'bg-gray-100 text-black border border-gray-200 hover:bg-gray-200',
      ghost: 'text-black hover:bg-gray-100',
    }

    const sizes = {
      sm: 'px-6 py-3 text-sm',
      md: 'px-8 py-4 text-base',
      lg: 'px-10 py-5 text-lg',
    }

    const shouldShowArrow = showArrow ?? (variant === 'secondary')

    return (
      <button
        ref={ref}
        className={cn(
          'rounded-button font-medium transition-colors duration-200 inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
        {shouldShowArrow && (
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none"
            className="transition-transform group-hover:translate-x-1"
          >
            <path 
              d="M6 3L11 8L6 13" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }