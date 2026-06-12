import { type Metadata } from 'next'

import { TemplateShell, Sheet, SheetHeading } from '@/components/templates/TemplateShell'

export const metadata: Metadata = {
  title: 'Free Repair Price List Template for Phone Repair Shops',
  description:
    'Free printable price list template for phone repair shops — common repairs with space for your prices, turnaround times, and warranty terms. Print or save as PDF for your counter or window.',
  alternates: { canonical: '/templates/repair-price-list-template' },
}

const SERVICES = [
  'Screen replacement',
  'Battery replacement',
  'Charging port repair',
  'Back glass replacement',
  'Camera replacement',
  'Speaker / microphone repair',
  'Water damage assessment',
  'Software / data recovery',
  'Diagnostics (no repair)',
  '',
  '',
  '',
]

export default function Page() {
  return (
    <TemplateShell
      title="Repair Price List Template"
      intro={
        <>
          <p>
            A printable price list for your counter, window, or wall. The most
            common phone repairs are pre-filled — add your prices, typical
            turnaround times, and warranty period. Three blank rows at the
            bottom for services specific to your shop.
          </p>
          <p>
            Displaying prices openly builds trust with walk-ins and cuts down
            the &ldquo;how much for a screen?&rdquo; phone calls. Pair it with
            our guide on{' '}
            <a href="/blog/how-to-price-phone-repairs">
              how to price phone repairs profitably
            </a>
            .
          </p>
        </>
      }
    >
      <Sheet>
        <SheetHeading title="REPAIR PRICE LIST" />
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 text-left">
              <th className="py-2 pr-2 text-[0.65rem] font-semibold tracking-wide text-gray-500 uppercase">
                Repair
              </th>
              <th className="w-24 py-2 pr-2 text-[0.65rem] font-semibold tracking-wide text-gray-500 uppercase">
                Price from
              </th>
              <th className="w-28 py-2 pr-2 text-[0.65rem] font-semibold tracking-wide text-gray-500 uppercase">
                Turnaround
              </th>
              <th className="w-24 py-2 text-[0.65rem] font-semibold tracking-wide text-gray-500 uppercase">
                Warranty
              </th>
            </tr>
          </thead>
          <tbody>
            {SERVICES.map((service, i) => (
              <tr key={`${service}-${i}`} className="border-b border-gray-300">
                <td className="py-3 pr-2 text-gray-800">{service || ' '}</td>
                <td className="py-3 pr-2" />
                <td className="py-3 pr-2" />
                <td className="py-3" />
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6 text-[0.7rem] text-gray-500">
          Prices are a guide and may vary by model and parts availability. Ask
          for a written estimate before we begin any repair.
        </div>
      </Sheet>
    </TemplateShell>
  )
}
