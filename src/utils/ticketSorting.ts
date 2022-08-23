import { Ticket } from '../types/Ticket'

export const sortTickets = (tickets: Ticket[], order: string): Ticket[] => {
  const sortedTickets = [...tickets]
  if (order === 'cheapest') {
    sortedTickets.sort((a, b) => a.price - b.price)
  }
  if (order === 'fastest') {
    sortedTickets.sort((a, b) => a.info.duration - b.info.duration)
  }
  if (order === 'optimal') {
    const prices = sortedTickets.map((ticket) => ticket.price)
    const minPrice = Math.min(...prices)
    const maxPrice = Math.max(...prices)
    const durations = sortedTickets.map((ticket) => ticket.info.duration)
    const minDuration = Math.min(...durations)
    const maxDuration = Math.max(...durations)
    sortedTickets.sort((a, b) => {
      const indexA =
        ((a.price - minPrice) / (maxPrice - minPrice)) * 2 +
        (a.info.duration - minDuration) / (maxDuration - minDuration)
      const indexB =
        ((b.price - minPrice) / (maxPrice - minPrice)) * 2 +
        (b.info.duration - minDuration) / (maxDuration - minDuration)
      return indexA - indexB
    })
  }
  return sortedTickets
}
