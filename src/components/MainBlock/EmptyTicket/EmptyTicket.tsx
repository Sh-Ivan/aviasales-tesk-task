import React from 'react'
import './EmptyTicket.scss'

const EmptyTicket = () => {
  return (
    <div className='empty-tickets'>
      <h2 className='empty-tickets__title'>Ни одного билета не найдено</h2>
      <h2 className='empty-tickets__title'>Попробуйте ослабить фильтры</h2>
    </div>
  )
}

export default EmptyTicket
