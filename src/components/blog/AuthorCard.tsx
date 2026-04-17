export function AuthorCard() {
  return (
    <div className="not-prose mt-12 border-t border-white/10 pt-8">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-lg font-bold text-white">
          P
        </div>
        <div>
          <p className="text-sm font-semibold text-white">The PhoneRepairPOS Team</p>
          <p className="text-sm text-gray-400">
            Building tools to help phone repair shops work smarter.
          </p>
        </div>
      </div>
    </div>
  )
}
