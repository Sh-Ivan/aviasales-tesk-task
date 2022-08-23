import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { changeSearchField, searchSelector } from '../../store/slices/filtersSlice'
import { ticketSelector } from '../../store/slices/ticketSlice'
import { SearchTypes } from '../../types/Filters'
import './SearchBlock.scss'
import DateSearchItem from './SearchItem.tsx/DateSearchItem'
import SearchItem from './SearchItem.tsx/SearchItem'
import SwapButton from './SwapButton/SwapButton'

const SearchBlock = () => {
  const searchData = useAppSelector(searchSelector)
  const { tickets } = useAppSelector(ticketSelector)
  const dispatch = useAppDispatch()

  const origins = tickets
    .map((ticket) => ticket.info.origin)
    .filter((v, i, a) => a.indexOf(v) === i)

  const destinations = tickets
    .map((ticket) => ticket.info.destination)
    .filter((v, i, a) => a.indexOf(v) === i)

  const handleChange = (type: SearchTypes, value: string) => {
    dispatch(changeSearchField({ type, value }))
  }

  const handleSwap = () => {
    const to = searchData.to
    const from = searchData.from
    dispatch(changeSearchField({ type: 'to', value: from }))
    dispatch(changeSearchField({ type: 'from', value: to }))
  }

  return (
    <div className='search-block'>
      <SearchItem
        placeholder='Откуда'
        value={searchData.from}
        type='from'
        onChange={handleChange}
        dataOptions={origins}
      />
      <SwapButton handleClick={handleSwap} />
      <SearchItem
        placeholder='Куда'
        value={searchData.to}
        type='to'
        onChange={handleChange}
        dataOptions={destinations}
      />
      <DateSearchItem
        placeholder='Когда'
        value={searchData.dateTo}
        type='dateTo'
        onChange={handleChange}
      />
      <DateSearchItem
        placeholder='Обратно'
        value={searchData.dateFrom}
        type='dateFrom'
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBlock
