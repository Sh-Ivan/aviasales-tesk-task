import React, { useState } from 'react'
import './SearchBlock.scss'
import DateSearchItem from './SearchItem.tsx/DateSearchItem'
import SearchItem from './SearchItem.tsx/SearchItem'
import SwapButton from './SwapButton/SwapButton'

interface SearchData {
  from: string
  to: string
  dateTo: string
  dateFrom: string
}

const initialState: SearchData = {
  from: '',
  to: '',
  dateTo: '',
  dateFrom: '',
}

const SearchBlock = () => {
  const [searchData, setSearchData] = useState(initialState)

  const handleChange = (type: string, value: string) => {
    setSearchData({ ...searchData, [type]: value })
  }

  const handleSwap = () => {
    setSearchData({ ...searchData, to: searchData.from, from: searchData.to })
  }

  return (
    <div className='search-block'>
      <SearchItem
        placeholder='Откуда'
        value={searchData.from}
        type='from'
        onChange={handleChange}
      />
      <SwapButton handleClick={handleSwap} />
      <SearchItem placeholder='Куда' value={searchData.to} type='to' onChange={handleChange} />
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
