import { Ticket } from '../types/Ticket'

export const sortTickets = (tickets: Ticket[], order: string): Ticket[] => {
  const sortedTickets = [...tickets]
  switch (order) {
    case 'cheapest':
      sortedTickets.sort((a, b) => a.price - b.price)
      break
    case 'fastest':
      sortedTickets.sort((a, b) => a.info.duration - b.info.duration)
      break
    case 'optimal':
      // TODO Optimal sorting
      sortedTickets.sort((a, b) => a.info.duration - b.info.duration)
      break
  }
  return sortedTickets
}
