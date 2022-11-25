import React from 'react'
import './DatePicker.scss'
import Calendar from './Calendar.png'
import { SearchTypes } from '../../../types/Filters'

export interface DatePickerProps {
  type: SearchTypes
  value: string
  onChange: (type: SearchTypes, value: string) => void
}

const DatePicker = ({ onChange, value, type }: DatePickerProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(type, e.target.value)
  }

  return (
    <div className='date-picker'>
      <span className='datepicker-toggle'>
        <img src={Calendar} alt='calendar' className='datepicker-toggle-button' />
        <input
          type='date'
          className='datepicker-input'
          value={value || ''}
          onChange={handleChange}
        />
      </span>
    </div>
  )
}

export default DatePicker
