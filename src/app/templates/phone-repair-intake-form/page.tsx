import { type Metadata } from 'next'

import {
  TemplateShell,
  Sheet,
  SheetHeading,
  Field,
  CheckRow,
} from '@/components/templates/TemplateShell'

export const metadata: Metadata = {
  title: 'Free Phone Repair Intake Form (Printable PDF Template)',
  description:
    'Free printable customer intake form for phone repair shops — device condition checklist, data & passcode consent, liability terms, and signature. Print or save as PDF. No sign-up.',
  alternates: { canonical: '/templates/phone-repair-intake-form' },
}

export default function Page() {
  return (
    <TemplateShell
      title="Phone Repair Intake Form"
      intro={
        <>
          <p>
            A printable check-in form for phone repair shops. It records the
            device&rsquo;s condition <em>before</em> you touch it — cracked
            screen, water damage, what accessories were left — and gets the
            customer&rsquo;s written consent on passcodes, data, and liability.
            That one signature avoids most &ldquo;it was fine when I dropped it
            off&rdquo; disputes.
          </p>
          <p>
            Print it (or save as PDF from the print dialog) and keep a stack at
            the counter. One page per device.
          </p>
        </>
      }
    >
      <Sheet>
        <SheetHeading title="DEVICE INTAKE FORM" />
        <div className="flex flex-wrap">
          <Field label="Date" width="third" />
          <Field label="Ticket #" width="third" />
          <Field label="Staff member" width="third" />
          <Field label="Customer name" width="half" />
          <Field label="Phone number" width="half" />
          <Field label="Email" width="half" />
          <Field label="Preferred contact (call / SMS / WhatsApp / email)" width="half" />
          <Field label="Device make & model" width="half" />
          <Field label="IMEI / Serial number" width="half" />
          <Field label="Reported issue (in the customer's words)" />
        </div>

        <div className="mt-2">
          <div className="px-1.5 pb-2 text-[0.65rem] font-semibold tracking-wide text-gray-500 uppercase">
            Condition on arrival — tick all that apply
          </div>
          <CheckRow
            items={[
              'Screen cracked',
              'Screen lifting',
              'Back glass damaged',
              'Frame bent / dented',
              'Liquid damage suspected',
              'Does not power on',
              'Battery swollen',
              'Buttons damaged',
              'Camera damaged',
              'Previously repaired elsewhere',
            ]}
          />
        </div>

        <div className="mt-4">
          <div className="px-1.5 pb-2 text-[0.65rem] font-semibold tracking-wide text-gray-500 uppercase">
            Left with the device
          </div>
          <CheckRow items={['SIM card', 'Memory card', 'Case', 'Charger / cable', 'None']} />
        </div>

        <div className="mt-4 flex flex-wrap">
          <Field label="Device passcode (optional — needed for full testing)" width="half" />
          <Field label="Estimated cost quoted" width="half" />
        </div>

        <div className="mt-2 px-1.5 text-[0.7rem]/5 text-gray-600">
          I authorize the repair described above. I understand that: (1) the
          shop is not responsible for data loss — I am responsible for backing
          up my device; (2) diagnosis may reveal additional faults, and I will
          be contacted before any work beyond the quoted estimate; (3) devices
          with prior liquid damage or prior repairs carry additional risk during
          repair; (4) devices left uncollected for 60+ days may be disposed of
          or sold to recover costs.
        </div>

        <div className="mt-6 flex flex-wrap">
          <Field label="Customer signature" width="half" />
          <Field label="Date" width="half" />
        </div>
      </Sheet>
    </TemplateShell>
  )
}
