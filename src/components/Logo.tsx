export function Logo(props: React.ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      {...props}
      className={`font-display text-lg font-bold tracking-tight text-white ${props.className ?? ''}`}
    >
      RepairPOS
    </span>
  )
}
