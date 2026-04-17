const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
})

export function PostHeader({ date }: { date: string }) {
  return (
    <time dateTime={date} className="text-2xs font-medium text-gray-500">
      {dateFormatter.format(new Date(date))}
    </time>
  )
}
