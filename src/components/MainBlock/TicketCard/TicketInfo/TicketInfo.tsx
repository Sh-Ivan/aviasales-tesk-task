import React from 'react'
import './TicketInfo.scss'

interface TicketInfoProps {
  type: 'title' | 'data'
  text?: string
}

const TicketInfo = ({ type, text = '' }: TicketInfoProps) => {
  return (
    <div className='row'>
      <div className={`ticket-info-${type}`}>{text}</div>
    </div>
  )
}

export default TicketInfo
