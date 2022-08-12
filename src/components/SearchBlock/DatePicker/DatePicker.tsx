import React from 'react'
import './DatePicker.scss'
import Calendar from './Calendar.png'

const DatePicker = () => {
  return (
    <div className='date-picker'>
      <img src={Calendar} alt='Calendar' />
    </div>
  )
}

export default DatePicker
