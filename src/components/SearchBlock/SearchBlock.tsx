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
    const origin = searchData.origin
    const destionation = searchData.destionation
    dispatch(changeSearchField({ type: 'destionation', value: origin }))
    dispatch(changeSearchField({ type: 'origin', value: destionation }))
  }

  return (
    <div className='search-block'>
      <SearchItem
        placeholder='Откуда'
        value={searchData.origin}
        type='origin'
        onChange={handleChange}
        dataOptions={origins}
      />
      <SwapButton handleClick={handleSwap} />
      <SearchItem
        placeholder='Куда'
        value={searchData.destionation}
        type='destionation'
        onChange={handleChange}
        dataOptions={destinations}
      />
      <DateSearchItem
        placeholder='Когда'
        value={searchData.dateStart}
        type='dateStart'
        onChange={handleChange}
      />
      <DateSearchItem
        placeholder='Обратно'
        value={searchData.dateEnd}
        type='dateEnd'
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBlock
