import React from 'react'
import { SearchTypes } from '../../../types/Filters'
import './SearchItem.scss'

export interface SearchItemProps {
  placeholder: string
  type: SearchTypes
  value: string
  onChange: (type: SearchTypes, value: string) => void
  dataOptions?: string[]
}

const SearchItem = ({ placeholder, value, type, onChange, dataOptions }: SearchItemProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(type, e.target.value)
  }

  return (
    <div className='search-item'>
      <input
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        list={type}
      />
      <datalist id={type}>
        {dataOptions?.map((option) => (
          <option key={option} value={option} />
        ))}
      </datalist>
    </div>
  )
}

export default SearchItem
