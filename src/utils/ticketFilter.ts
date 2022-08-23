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
    if (company?.name !== 'all' && ticket.companyId !== company?.id) return false
    if (!transfers.includes(ticket.info.stops.length)) return false
    if (
      (filters.search.from && filters.search.from !== ticket.info.origin) ||
      (filters.search.to && filters.search.to !== ticket.info.destination)
    ) {
      return false
    }
    if (
      (ticket.info.dateStart && !datesIsEqual(ticket.info.dateStart, filters.search.dateFrom)) ||
      (ticket.info.dateEnd && !datesIsEqual(ticket.info.dateEnd, filters.search.dateTo))
    ) {
      return false
    }
    return true
  })

  return filteredTickets
}
