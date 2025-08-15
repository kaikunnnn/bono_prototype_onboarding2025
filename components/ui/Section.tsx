import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  padding?: 'hero' | 'standard' | 'small'
  background?: 'white' | 'gray'
  container?: boolean
}

export function Section({ 
  className, 
  padding = 'standard',
  background = 'white',
  container = true,
  children,
  ...props 
}: SectionProps) {
  const paddingClasses = {
    hero: 'section-padding-hero',      // 80px top, 64px bottom
    standard: 'section-padding-standard', // 80px top/bottom
    small: 'section-padding-small'         // 48px top/bottom
  }
  
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50'
  }
  
  return (
    <section 
      className={cn(
        paddingClasses[padding], 
        backgroundClasses[background], 
        className
      )}
      {...props}
    >
      {container ? (
        <div className="container">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
}