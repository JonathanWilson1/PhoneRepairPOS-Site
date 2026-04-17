const styles = {
  insight: {
    border: 'border-violet-500/40',
    bg: 'bg-violet-950/30',
    icon: '💡',
    title: 'text-violet-300',
  },
  warning: {
    border: 'border-amber-500/40',
    bg: 'bg-amber-950/20',
    icon: '⚠️',
    title: 'text-amber-300',
  },
  tip: {
    border: 'border-sky-500/40',
    bg: 'bg-sky-950/20',
    icon: '💎',
    title: 'text-sky-300',
  },
}

export function Callout({
  type = 'insight',
  title,
  children,
}: {
  type?: 'insight' | 'warning' | 'tip'
  title?: string
  children: React.ReactNode
}) {
  const s = styles[type]

  return (
    <div
      className={`not-prose my-8 rounded-2xl border ${s.border} ${s.bg} p-6`}
    >
      <div className="flex items-start gap-3">
        <span className="text-xl leading-none">{s.icon}</span>
        <div>
          {title && (
            <p className={`mb-2 text-sm font-semibold ${s.title}`}>{title}</p>
          )}
          <div className="text-sm/6 text-gray-300">{children}</div>
        </div>
      </div>
    </div>
  )
}
