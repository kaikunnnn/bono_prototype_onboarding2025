'use client'

import { cn } from '@/lib/utils'

interface APITabsProps {
  tabs: string[]
  activeTab: number
  onTabChange: (index: number) => void
  className?: string
}

export function APITabs({ tabs, activeTab, onTabChange, className }: APITabsProps) {
  return (
    <div className={cn(
      'bg-gray-100 rounded-full p-2 inline-flex gap-1',
      className
    )}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => onTabChange(index)}
          className={cn(
            'px-6 py-3 rounded-full font-medium transition-colors duration-200 whitespace-nowrap',
            activeTab === index
              ? 'bg-white text-black shadow-sm border border-gray-200'
              : 'text-gray-600 hover:text-black hover:bg-gray-50'
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}