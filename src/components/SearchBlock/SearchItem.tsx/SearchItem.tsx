import React from 'react'
import './SearchItem.scss'

export interface SearchItemProps {
  placeholder: string
  type: string
  value: string
  onChange: (type: string, value: string) => void
}

const SearchItem = ({ placeholder, value, type, onChange }: SearchItemProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(type, e.target.value)
  }

  return (
    <div className='search-item'>
      <input type='text' placeholder={placeholder} value={value} onChange={handleChange} />
    </div>
  )
}

export default SearchItem
