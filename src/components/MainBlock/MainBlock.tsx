import React from 'react'
import Button from '../Shared/Button/Button'
import SortingBlock from './SortingBlock/SortingBlock'
import TicketCard from './TicketCard/TicketCard'
import './MainBlock.scss'
import S7Logo from './img/S7 Logo.png'
import XiamenAir from './img/XiamenAir Logo.png'

export interface ITransfers {
  numTransfers: string
  listTransfers: string
}

const transfers: ITransfers[] = [
  {
    numTransfers: 'БЕЗ ПЕРЕСАДОК',
    listTransfers: '',
  },
  {
    numTransfers: '2 ПЕРЕСАДКИ',
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
      {[1, 2, 3, 4, 5, 6].map((ticket, index) => {
        return (
          <TicketCard
            key={ticket}
            image={index % 2 !== 0 ? XiamenAir : S7Logo}
            transfers={index == 0 ? transfers[0] : transfers[1]}
          />
        )
      })}
      <div className='bottom-button'>
        <Button buttonText='ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ' active={true} handleClick={handleButtonClick} />
      </div>
    </div>
  )
}

export default MainBlock
