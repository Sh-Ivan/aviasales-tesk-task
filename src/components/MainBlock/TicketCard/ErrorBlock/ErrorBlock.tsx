import React from 'react'
import { useAppDispatch } from '../../../../store/hooks'
import { fetchTickets } from '../../../../store/slices/ticketSlice'
import Button from '../../../Shared/Button/Button'
import './ErrorBlock.scss'

const ErrorBlock = () => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(fetchTickets())
  }

  return (
    <div className='error-tickets'>
      <h2 className='error-tickets__title'>Произошла ошибка при загрузке билетов</h2>
      <Button buttonText='Попробовать еще раз' active={true} handleClick={handleClick} />
    </div>
  )
}

export default ErrorBlock
