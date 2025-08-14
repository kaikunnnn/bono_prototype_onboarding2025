interface CourseHeaderProps {
  title: string
  description: string
  progress: number
  totalChapters: number
}

export function CourseHeader({ title, description, progress, totalChapters }: CourseHeaderProps) {
  return (
    <div className="bg-card rounded-card p-6 mb-8">
      <h1 className="text-2xl md:text-3xl font-bold text-text mb-2">
        {title}
      </h1>
      <p className="text-muted mb-4">
        {description}
      </p>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted">進捗</span>
          <span className="text-text font-medium">
            {progress} / {totalChapters} 章完了
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${(progress / totalChapters) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}