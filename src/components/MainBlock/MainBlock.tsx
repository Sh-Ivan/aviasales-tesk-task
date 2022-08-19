import React from 'react'
import Button from '../Shared/Button'
import SortingBlock from './SortingBlock'
import TicketCard from './TicketCard'
import './MainBlock.scss'
import S7Logo from './img/S7 Logo.png'
import XiamenAir from './img/XiamenAir Logo.png'

export interface ITransfers {
  numTransfers: string
  listTransfers: string
}

const transfers: ITransfers[] = [
  {
    numTransfers: 'без пересадок',
    listTransfers: '',
  },
  {
    numTransfers: '2 пересадки',
    listTransfers: 'HKG, JNB',
  },
]

const MainBlock = () => {
  const handleButtonClick = () => {
    return
  }

  return (
    <div className='main-block'>
      <SortingBlock />
      {Array.from({ length: 6 }).map((ticket, index) => {
        return (
          <TicketCard
            key={index}
            image={index % 2 !== 0 ? XiamenAir : S7Logo}
            transfers={index == 0 ? transfers[0] : transfers[1]}
          />
        )
      })}
      <div className='bottom-button'>
        <Button buttonText='показать еще 5 билетов' active={true} handleClick={handleButtonClick} />
      </div>
    </div>
  )
}

export default MainBlock
