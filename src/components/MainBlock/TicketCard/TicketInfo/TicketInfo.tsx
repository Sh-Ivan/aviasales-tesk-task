import React from 'react'
import './TicketInfo.scss'

interface TicketInfoProps {
  type: 'title' | 'data'
  text?: string
}

const TicketInfo = ({ type, text = '' }: TicketInfoProps) => {
  const classNames = type === 'title' ? 'ticket-info-title' : 'ticket-info-data'
  return <div className={classNames}>{text}</div>
}

export default TicketInfo
