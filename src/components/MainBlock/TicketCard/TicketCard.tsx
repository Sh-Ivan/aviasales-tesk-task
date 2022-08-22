import React from 'react'
import { useAppSelector } from '../../../store/hooks'
import { companySelector } from '../../../store/slices/companySlice'
import { Ticket } from '../../../types/Ticket'
import AviaLogo from './AviaLogo'
import Price from './Price/Price'
import './TicketCard.scss'
import TicketInfo from './TicketInfo'
import {
  dateToTime,
  numberWithSpace,
  stopsNumber,
  daysHoursMinutes,
} from '../../../utils/ticketUtils'

interface TicketCardProps {
  ticket: Ticket
}

const TicketCard = ({ ticket }: TicketCardProps) => {
  const { companies } = useAppSelector(companySelector)

  const image = companies.find((company) => company.id === ticket.companyId)?.logo

  return (
    <div className='ticket-card'>
      <div className='row'>
        <Price price={numberWithSpace(ticket.price) + ' Р'} />
        <AviaLogo image={image} />
      </div>
      <div className='row'>
        <div className='col'>
          <TicketInfo type='title' text={`${ticket.info.origin} - ${ticket.info.destination}`} />
          <TicketInfo
            type='data'
            text={`${dateToTime(ticket.info.dateStart)} - ${dateToTime(ticket.info.dateEnd)}`}
          />
        </div>
        <div className='col'>
          <TicketInfo type='title' text='В ПУТИ' />
          <TicketInfo type='data' text={daysHoursMinutes(ticket.info.duration)} />
        </div>
        <div className='col align-self-center'>
          <TicketInfo type='title' text={stopsNumber(ticket.info.stops.length)} />
          <TicketInfo type='data' text={ticket.info.stops.join(', ')} />
        </div>
      </div>
    </div>
  )
}

export default TicketCard
