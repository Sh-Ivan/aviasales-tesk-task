import React from 'react'
import { ITransfers } from '../MainBlock'
import AviaLogo from './AviaLogo'
import Price from './Price'
import './TicketCard.scss'
import TicketInfo from './TicketInfo'

interface TicketCardProps {
  image: string
  transfers: ITransfers
}

const TicketCard = ({ image, transfers }: TicketCardProps) => {
  return (
    <div className='ticket-card'>
      <div className='row'>
        <Price price='13 400 Р' />
        <AviaLogo image={image} />
      </div>
      <div className='row'>
        <div className='col'>
          <TicketInfo type='title' text='MOW - HKT' />
          <TicketInfo type='data' text='10:45 - 08:00' />
        </div>
        <div className='col'>
          <TicketInfo type='title' text='В ПУТИ' />
          <TicketInfo type='data' text='21ч 15м' />
        </div>
        <div className='col align-self-center'>
          <TicketInfo type='title' text={transfers.numTransfers} />
          <TicketInfo type='data' text={transfers.listTransfers} />
        </div>
      </div>
    </div>
  )
}

export default TicketCard
