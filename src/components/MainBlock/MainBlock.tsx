import React, { useState } from 'react'
import Button from '../Shared/Button/Button'
import SortingBlock from './SortingBlock/SortingBlock'
import TicketCard from './TicketCard/TicketCard'
import './MainBlock.scss'
import { useAppSelector } from '../../store/hooks'
import { ticketSelector } from '../../store/slices/ticketSlice'

const MainBlock = () => {
  const [ticketNum, setTicketNum] = useState(5)
  const { tickets, isLoading, error } = useAppSelector(ticketSelector)

  const handleAddButtonClick = () => {
    setTicketNum(ticketNum + 5)
  }

  if (isLoading) return <div className='main-block'>Is loading...</div>
  if (error) return <div className='main-block'>{error}</div>

  return (
    <div className='main-block'>
      <SortingBlock />
      {tickets.slice(0, ticketNum).map((ticket) => {
        return <TicketCard key={ticket.id} ticket={ticket} />
      })}
      <div className='bottom-button'>
        <Button
          buttonText='ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ'
          active={true}
          handleClick={handleAddButtonClick}
        />
      </div>
    </div>
  )
}

export default MainBlock
