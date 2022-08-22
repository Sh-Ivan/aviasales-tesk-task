import React from 'react'
import './DatePicker.scss'
import Calendar from './Calendar.png'

import 'react-datepicker/dist/react-datepicker.css'
import { formatDate } from '../../../utils/datePicker'

export interface DatePickerProps {
  type: string
  value: string
  onChange: (type: string, value: string) => void
}

const DatePicker = ({ onChange, value, type }: DatePickerProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const stringDate = formatDate(e.target.value)
    onChange(type, stringDate)
  }

  return (
    <div className='date-picker'>
      <span className='datepicker-toggle'>
        <img src={Calendar} alt='calendar' className='datepicker-toggle-button' />
        <input type='date' className='datepicker-input' value={value} onChange={handleChange} />
      </span>
    </div>
  )
}

export default DatePicker
