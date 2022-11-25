import React, { useState, useEffect } from 'react'
import Button from '../Shared/Button/Button'
import SortingBlock from './SortingBlock'
import TicketCard from './TicketCard/TicketCard'
import './MainBlock.scss'
import { useAppSelector } from '../../store/hooks'
import { ticketSelector } from '../../store/slices/ticketSlice'
import SkeletonLoading from './TicketCard/SkeletonLoading/SkeletonLoading'
import ErrorBlock from './ErrorBlock/ErrorBlock'
import { sortTickets } from '../../utils/ticketSorting'
import { sortingSelector } from '../../store/slices/sortingSlice'
import { Ticket } from '../../types/Ticket'
import { filterTicket } from '../../utils/ticketFilter'
import EmptyTicket from './EmptyTicket/EmptyTicket'

const MainBlock = () => {
  const [ticketNum, setTicketNum] = useState(5)
  const { tickets, isLoading, error } = useAppSelector(ticketSelector)
  const filters = useAppSelector((state) => state.filters)
  const { companies } = useAppSelector((state) => state.companies)
  const [sortedTickets, setSortedTickets] = useState<Ticket[]>([])
  const { order: sortingOrder } = useAppSelector(sortingSelector)

  const handleAddButtonClick = () => {
    setTicketNum(ticketNum + 5)
  }
  useEffect(() => {
    const filteredTickets = filterTicket(tickets, filters, companies)
    setSortedTickets(sortTickets(filteredTickets, sortingOrder))
  }, [tickets, sortingOrder, filters, companies])

  if (isLoading)
    return (
      <div className='main-block'>
        {Array.from({ length: 5 }).map((el, index) => (
          <SkeletonLoading key={index} />
        ))}
      </div>
    )

  if (error)
    return (
      <div className='main-block'>
        <ErrorBlock />
      </div>
    )

  const ticketsBlock =
    sortedTickets.length === 0 ? (
      <EmptyTicket />
    ) : (
      sortedTickets.slice(0, ticketNum).map((ticket) => {
        return <TicketCard key={ticket.id} ticket={ticket} />
      })
    )

  return (
    <div className='main-block'>
      <SortingBlock />
      {ticketsBlock}
      <div className='bottom-button'>
        <Button
          buttonText='показать еще 5 билетов'
          active={true}
          handleClick={handleAddButtonClick}
        />
      </div>
    </div>
  )
}

export default MainBlock
