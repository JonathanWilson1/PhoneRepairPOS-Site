import { type Metadata } from 'next'

import {
  TemplateShell,
  Sheet,
  SheetHeading,
  Field,
  CheckRow,
} from '@/components/templates/TemplateShell'

export const metadata: Metadata = {
  title: 'Free Printable Repair Ticket Template for Phone Repair Shops',
  description:
    'Free phone repair ticket template — print it or save as PDF. Customer details, device, fault, estimate, status checkboxes, and a tear-off customer stub. No sign-up, no watermark.',
  alternates: { canonical: '/templates/repair-ticket-template' },
}

export default function Page() {
  return (
    <TemplateShell
      title="Repair Ticket Template"
      intro={
        <>
          <p>
            A clean, printable repair ticket for phone and device repair shops.
            One sheet covers the whole job: who the customer is, what the device
            is, what is wrong with it, what it will cost, and where the repair
            stands — plus a tear-off stub the customer takes away with their
            ticket number.
          </p>
          <p>
            Hit Print (or choose &ldquo;Save as PDF&rdquo; in the print dialog),
            and it lays out on a single A4/Letter page. Print a stack and keep
            them at the counter.
          </p>
        </>
      }
    >
      <Sheet>
        <SheetHeading title="REPAIR TICKET" />
        <div className="flex flex-wrap">
          <Field label="Ticket #" width="third" />
          <Field label="Date received" width="third" />
          <Field label="Ready by (est.)" width="third" />
          <Field label="Customer name" width="half" />
          <Field label="Phone number" width="half" />
          <Field label="Device make & model" width="half" />
          <Field label="IMEI / Serial" width="half" />
          <Field label="Device passcode (with consent)" width="half" />
          <Field label="Technician" width="half" />
          <Field label="Reported fault / issue" />
          <Field label="Notes (condition, accessories left, prior damage)" />
          <Field label="Estimated cost" width="third" />
          <Field label="Deposit paid" width="third" />
          <Field label="Balance due" width="third" />
        </div>
        <div className="mt-2">
          <div className="px-1.5 pb-2 text-[0.65rem] font-semibold tracking-wide text-gray-500 uppercase">
            Repair status
          </div>
          <CheckRow
            items={[
              'Received',
              'Diagnosing',
              'Waiting for parts',
              'Repairing',
              'Ready for collection',
              'Collected',
            ]}
          />
        </div>
        <div className="mt-4 flex flex-wrap">
          <Field label="Customer signature (repair authorization)" width="half" />
          <Field label="Date" width="half" />
        </div>

        <div className="mt-6 border-t-2 border-dashed border-gray-400 pt-6">
          <div className="mb-4 text-[0.65rem] font-semibold tracking-wide text-gray-500 uppercase">
            Customer copy — keep this stub
          </div>
          <div className="flex flex-wrap">
            <Field label="Ticket #" width="third" />
            <Field label="Device" width="third" />
            <Field label="Ready by (est.)" width="third" />
            <Field label="Shop phone number" width="half" />
            <Field label="Estimated cost" width="half" />
          </div>
        </div>
      </Sheet>
    </TemplateShell>
  )
}
