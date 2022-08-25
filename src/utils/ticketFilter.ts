import { Company } from '../types/Company'
import { Filters } from '../types/Filters'
import { Ticket } from '../types/Ticket'
import { datesIsEqual } from './datesIsEqual'

export const filterTicket = (tickets: Ticket[], filters: Filters, companies: Company[]) => {
  const company = companies.find((company) => company.selected)
  const transfers = filters.transfers.reduce<number[]>((acc, transfer) => {
    return transfer.checked ? [...acc, transfer.type] : acc
  }, [])

  const filteredTickets = tickets.filter((ticket) => {
    if (company?.id !== 'all' && ticket.companyId !== company?.id) return false

    if (!transfers.includes(ticket.info.stops.length)) return false

    if (
      (filters.search.origin && filters.search.origin !== ticket.info.origin) ||
      (filters.search.destionation && filters.search.destionation !== ticket.info.destination)
    ) {
      return false
    }

    if (
      (filters.search.dateStart &&
        !datesIsEqual(ticket.info.dateStart, filters.search.dateStart)) ||
      (filters.search.dateEnd && !datesIsEqual(ticket.info.dateEnd, filters.search.dateEnd))
    ) {
      return false
    }

    return true
  })

  return filteredTickets
}
