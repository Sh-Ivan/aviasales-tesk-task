import React from 'react'
import AviaLogo from './AviaLogo/AviaLogo'
import Price from './Price/Price'
import './TicketCard.scss'
import TicketInfo from './TicketInfo/TicketInfo'

const TicketCard = () => {
  return (
    <div className='ticket-card'>
      <div className='row'>
        <div className='col'>
          <Price price='13 400 Р' />
        </div>
        <div className='col'>
          <AviaLogo />
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
        <div className='col'>
          <div className='row'>
            <TicketInfo type='title' text='2 ПЕРЕСАДКИ' />
          </div>
          <div className='row'>
            <TicketInfo type='data' text='HKG, JNB' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketCard
