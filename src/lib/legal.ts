/**
 * Single source of truth for trading disclosures.
 *
 * UK law requires these to be shown on the website:
 *  - Companies Act 2006 s.82 + Companies (Trading Disclosures) Regulations 2008
 *    (once a company operates the site: registered name, part of the UK it is
 *    registered in, company number, registered office address)
 *  - Electronic Commerce (EC Directive) Regulations 2002
 *    (geographic address, email contact, VAT number if registered)
 *  - Companies Act 2006 Part 41 applies to a sole trader using a business name
 *    that is not their own surname: disclose the trader's name and an address
 *    for service. This is the duty that applies TODAY.
 *
 * To switch from sole trader to the company, set `entity` to 'company' and fill
 * in the company block. Nothing else needs to change.
 */

type Entity = 'soleTrader' | 'company'

export const entity: Entity = 'company'

/** Business/trading name this site operates under. */
export const tradingName = 'PhoneRepairPOS'

export const soleTrader = {
  /** Name of the individual carrying on the business. */
  proprietor: 'Jonathan Wilson',
  /** Address for service — must be an address where documents can be served. */
  addressForService: '[ADDRESS FOR SERVICE]',
}

/**
 * A company change of name keeps the same company number and registered
 * office, so only `registeredName` changes if the company is renamed.
 */
export const company = {
  registeredName: 'VoxBot Ltd',
  /** 'England and Wales', 'Northern Ireland', or 'Scotland'. */
  placeOfRegistration: 'Northern Ireland',
  companyNumber: 'NI736457',
  registeredOffice: '24 Rhanbuoy Park, Holywood BT18 0DX',
}

/** Set to the VAT number once registered; omitted from the footer while null. */
export const vatNumber: string | null = null

export const contactEmail = 'support@phonerepairpos.app'

/** The disclosure lines to render, in order. */
export function disclosureLines(): string[] {
  const lines =
    entity === 'company'
      ? [
          `${tradingName} is a trading name of ${company.registeredName}`,
          `Registered in ${company.placeOfRegistration}, company number ${company.companyNumber}`,
          `Registered office: ${company.registeredOffice}`,
        ]
      : [
          `${tradingName} is a business name of ${soleTrader.proprietor}`,
          `Address for service: ${soleTrader.addressForService}`,
        ]

  if (vatNumber) lines.push(`VAT registration number ${vatNumber}`)

  return lines
}
