import React from 'react'
import DatePicker from '../DatePicker/DatePicker'
import SearchItem, { SearchItemProps } from './SearchItem'
import './DateSearchItem.scss'

const DateSearchItem = (props: SearchItemProps) => {
  return (
    <div className='date-search-item'>
      <SearchItem {...props} />
      <DatePicker />
    </div>
  )
}

export default DateSearchItem
