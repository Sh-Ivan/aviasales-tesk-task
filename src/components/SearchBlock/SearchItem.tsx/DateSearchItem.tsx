import React from 'react'
import DatePicker from '../DatePicker/DatePicker'
import SearchItem, { SearchItemProps } from './SearchItem'
import './DateSearchItem.scss'
import { formatDate } from '../../../utils/datePicker'

const DateSearchItem = (props: SearchItemProps) => {
  const stringDate = formatDate(props.value)

  return (
    <div className='date-search-item'>
      <SearchItem {...props} value={stringDate} />
      <DatePicker {...props} />
    </div>
  )
}

export default DateSearchItem
