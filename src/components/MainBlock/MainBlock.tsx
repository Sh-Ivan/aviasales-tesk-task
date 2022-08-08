import React from 'react'
import Button from '../Shared/Button/Button'
import SortingBlock from './SortingBlock/SortingBlock'
import TicketCard from './TicketCard/TicketCard'
import './MainBlock.scss'

const MainBlock = () => {
  return (
    <div className='main-block'>
      <SortingBlock />
      {[1, 2, 3, 4, 5].map((ticket) => {
        return <TicketCard key={ticket} />
      })}
      <Button />
    </div>
  )
}

export default MainBlock
