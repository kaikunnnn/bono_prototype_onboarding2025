import { cn } from '@/lib/utils'

interface TwoColumnLayoutProps {
  leftContent: React.ReactNode
  rightContent: React.ReactNode
  imageLeft?: boolean
  gap?: 'normal' | 'large'
  className?: string
}

export function TwoColumnLayout({ 
  leftContent, 
  rightContent, 
  imageLeft = false,
  gap = 'large',
  className
}: TwoColumnLayoutProps) {
  const gapClasses = {
    normal: 'gap-space-4',     // 32px
    large: 'gap-space-8'       // 64px
  }
  
  return (
    <div className={cn(
      'grid grid-cols-1 lg:grid-cols-2 items-center',
      gapClasses[gap],
      className
    )}>
      {imageLeft ? (
        <>
          <div>{leftContent}</div>
          <div>{rightContent}</div>
        </>
      ) : (
        <>
          <div>{rightContent}</div>
          <div>{leftContent}</div>
        </>
      )}
    </div>
  )
}