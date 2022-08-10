import React from 'react'
import { ITransfers } from '../MainBlock'
import AviaLogo from './AviaLogo/AviaLogo'
import Price from './Price/Price'
import './TicketCard.scss'
import TicketInfo from './TicketInfo/TicketInfo'

interface TicketCardProps {
  image: string
  transfers: ITransfers
}

const TicketCard = ({ image, transfers }: TicketCardProps) => {
  return (
    <div className='ticket-card'>
      <div className='row'>
        <div className='col align-self-center'>
          <Price price='13 400 Р' />
        </div>
        <div className='col'>
          <AviaLogo image={image} />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='row'>
            <TicketInfo type='title' text='MOW - HKT' />
          </div>
          <div className='row'>
            <TicketInfo type='data' text='10:45 - 08:00' />
          </div>
        </div>
        <div className='col'>
          <div className='row'>
            <TicketInfo type='title' text='В ПУТИ' />
          </div>
          <div className='row'>
            <TicketInfo type='data' text='21ч 15м' />
          </div>
        </div>
        <div className='col align-self-center'>
          <div className='row'>
            <TicketInfo type='title' text={transfers.numTransfers} />
          </div>
          <div className='row'>
            <TicketInfo type='data' text={transfers.listTransfers} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketCard
