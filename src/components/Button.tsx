import Link from 'next/link'
import clsx from 'clsx'

function ButtonInner({
  arrow = false,
  children,
}: {
  arrow?: boolean
  children: React.ReactNode
}) {
  return (
    <>
      {children} {arrow ? <span aria-hidden="true">&rarr;</span> : null}
    </>
  )
}

export function Button({
  className,
  arrow,
  variant = 'primary',
  children,
  ...props
}: { arrow?: boolean; variant?: 'primary' | 'secondary' } & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | ({ href?: undefined } & React.ComponentPropsWithoutRef<'button'>)
)) {
  className = clsx(
    className,
    'group relative isolate inline-flex items-center justify-center rounded-md py-2 text-[0.8125rem]/6 font-semibold transition-all',
    arrow ? 'pl-3 pr-2.5' : 'px-3',
    variant === 'primary'
      ? 'bg-sky-500 text-white hover:bg-sky-400 shadow-lg shadow-sky-500/25'
      : 'bg-white/10 text-white/70 hover:bg-white/15 hover:text-white',
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props}>
      <ButtonInner arrow={arrow}>{children}</ButtonInner>
    </button>
  ) : (
    <Link className={className} {...props}>
      <ButtonInner arrow={arrow}>{children}</ButtonInner>
    </Link>
  )
}
