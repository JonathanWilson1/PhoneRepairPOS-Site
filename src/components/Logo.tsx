export function Logo(props: React.ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      {...props}
      className={`inline-flex items-center gap-2 font-display text-lg font-bold tracking-tight text-white ${props.className ?? ''}`}
    >
      <img
        src="/icon-192.png"
        alt=""
        aria-hidden="true"
        className="h-8 w-8 rounded-lg"
      />
      RepairPOS
    </span>
  )
}
