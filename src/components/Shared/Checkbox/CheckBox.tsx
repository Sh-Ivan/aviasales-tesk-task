import React from 'react'
import { useAppDispatch } from '../../../store/hooks'
import { changeTransfer } from '../../../store/slices/filtersSlice'
import { Transfers } from '../../../types/Filters'
import './CheckBox.scss'

interface CheckBoxProps {
  filter: Transfers
}

const CheckBox = ({ filter }: CheckBoxProps) => {
  const dispatch = useAppDispatch()

  const handleChange = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatch(changeTransfer(filter.type))
  }

  const classNames = filter.checked ? 'checkbox__border checked' : 'checkbox__border'

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
        <span className={classNames}></span>
        {filter.name}
      </label>
    </div>
  )
}

export default CheckBox
