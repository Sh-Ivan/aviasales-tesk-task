import React from 'react'
import './CheckBox.scss'

export interface IFilter {
  name: string
  type: number
  checked: boolean
}

interface CheckBoxProps {
  filter: IFilter
  handleClick: (e: React.MouseEvent, type: number) => void
}

const CheckBox = ({ filter, handleClick }: CheckBoxProps) => {
  const handleChange = (e: React.MouseEvent) => {
    handleClick(e, filter.type)
  }

  return (
    <div className='filters__item' onClick={handleChange}>
      <label htmlFor={'transition_' + filter.type} className='checkbox'>
        <input
          type='checkbox'
          name={'transition_' + filter.type}
          defaultChecked={filter.checked}
          id={'transition_' + filter.type}
          className='checkbox__input'
        />
        <span className={filter.checked ? 'checkbox__border checked' : 'checkbox__border'}></span>
        {filter.name}
      </label>
    </div>
  )
}

export default CheckBox
