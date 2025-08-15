import { cn } from '@/lib/utils'

interface FeatureItemProps {
  text: string
  hasIcon?: boolean
  type?: 'feature' | 'spec' | 'price'
  className?: string
}

export function FeatureItem({ 
  text, 
  hasIcon = true, 
  type = 'feature',
  className 
}: FeatureItemProps) {
  const textClasses = {
    feature: 'text-gray-700 text-base',
    spec: 'text-gray-600 text-sm',
    price: 'text-gray-600 text-sm'
  }

  return (
    <div className={cn('flex items-start gap-3', className)}>
      {hasIcon && type === 'feature' && (
        <div className="text-black flex-shrink-0 mt-0.5">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path 
              d="M7.5 10L9.5 12L12.5 8" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
      <span className={textClasses[type]}>
        {text}
      </span>
    </div>
  )
}