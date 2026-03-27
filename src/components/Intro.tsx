import Link from 'next/link'

import { IconLink } from '@/components/IconLink'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/Button'

function LinkedInIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14ZM4.67 5.715a1.037 1.037 0 0 1-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032Zm.889 6.51h-1.78V6.498h1.78v5.727ZM13.11 2H2.885A.88.88 0 0 0 2 2.866v10.268a.88.88 0 0 0 .885.866h10.226a.882.882 0 0 0 .889-.866V2.865A.88.88 0 0 0 13.111 2Z" />
    </svg>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M2.5 3h11a.5.5 0 0 1 .5.5v.25L8 7.75 2 3.75V3.5a.5.5 0 0 1 .5-.5ZM2 5.25l6 4 6-4v7.25a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V5.25Z" />
    </svg>
  )
}

function BookIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M7 3.41a1 1 0 0 0-.668-.943L2.275 1.039a.987.987 0 0 0-.877.166c-.25.192-.398.493-.398.812V12.2c0 .454.296.853.725.977l3.948 1.365A1 1 0 0 0 7 13.596V3.41ZM9 13.596a1 1 0 0 0 1.327.946l3.948-1.365c.429-.124.725-.523.725-.977V2.017c0-.32-.147-.62-.398-.812a.987.987 0 0 0-.877-.166L9.668 2.467A1 1 0 0 0 9 3.41v10.186Z" />
    </svg>
  )
}

export function Intro() {
  return (
    <>
      <div>
        <Link href="/">
          <Logo className="inline-block h-8 w-auto" />
        </Link>
      </div>
      <h1 className="mt-14 font-display text-4xl/tight font-light text-white">
        The iPad POS built for{' '}
        <span className="text-sky-300">phone repair shops</span>
      </h1>
      <p className="mt-4 text-sm/6 text-gray-300">
        Create tickets, track repairs, and get paid — all from your iPad. Built
        specifically for phone repair shops that want to ditch the paperwork.
      </p>
      <div className="mt-8 flex flex-wrap gap-x-4 gap-y-3">
        <Button
          href="https://apps.apple.com/gb/app/phone-repair-pos/id6759859240"
          arrow
        >
          Download free on the App Store
        </Button>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
        <IconLink href="/blog" icon={BookIcon} className="flex-none">
          Blog
        </IconLink>
        <IconLink href="mailto:support@phonerepairpos.app" icon={MailIcon} className="flex-none">
          support@phonerepairpos.app
        </IconLink>
      </div>
    </>
  )
}

export function IntroFooter() {
  return (
    <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">
      Built by{' '}
      <IconLink
        href="https://www.linkedin.com/in/jonathanwilson"
        icon={LinkedInIcon}
        compact
      >
        Jonathan Wilson
      </IconLink>
    </p>
  )
}
