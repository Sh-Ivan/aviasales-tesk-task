import React from 'react'
import { useAppSelector } from '../../../store/hooks'
import { companySelector } from '../../../store/slices/companySlice'
import { Ticket } from '../../../types/Ticket'
import AviaLogo from './AviaLogo/AviaLogo'
import Price from './Price/Price'
import './TicketCard.scss'
import TicketInfo from './TicketInfo/TicketInfo'

interface TicketCardProps {
  ticket: Ticket
}

const TicketCard = ({ ticket }: TicketCardProps) => {
  const { companies } = useAppSelector(companySelector)

  const image = companies.find((company) => company.id === ticket.companyId)?.logo

  return (
    <div className='ticket-card'>
      <div className='row'>
        <div className='col align-self-center'>
          <Price price={ticket.price.toString()} />
        </div>
        <div className='col'>
          <AviaLogo image={image} />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='row'>
            <TicketInfo type='title' text={`${ticket.info.origin} - ${ticket.info.destination}`} />
          </div>
          <div className='row'>
            <TicketInfo type='data' text={`${ticket.info.dateStart} - ${ticket.info.dateEnd}`} />
          </div>
        </div>
        <div className='col'>
          <div className='row'>
            <TicketInfo type='title' text='В ПУТИ' />
          </div>
          <div className='row'>
            <TicketInfo type='data' text={ticket.info.duration.toString()} />
          </div>
        </div>
        <div className='col align-self-center'>
          <div className='row'>
            <TicketInfo type='title' text={`${ticket.info.stops.length} остановок`} />
          </div>
          <div className='row'>
            <TicketInfo type='data' text={ticket.info.stops.join(', ')} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketCard
