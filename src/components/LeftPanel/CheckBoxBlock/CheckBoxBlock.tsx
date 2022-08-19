import React, { useState } from 'react'
import CheckBox from '../../Shared/Checkbox'
import BlockHeader from '../../Shared/BlockHeader'
import './CheckBoxBlock.scss'

export interface IFilter {
  name: string
  type: number
  checked: boolean
}

const filters: IFilter[] = [
  {
    name: 'Без пересадок',
    type: 0,
    checked: true,
  },
  {
    name: '1 пересадка',
    type: 1,
    checked: true,
  },
  {
    name: '2 пересадки',
    type: 2,
    checked: true,
  },
  {
    name: '3 пересадки',
    type: 3,
    checked: false,
  },
]

const changeFilter = (filters: IFilter[], type: number) =>
  filters.map((filter) => {
    filter.checked = filter.type !== type ? filter.checked : !filter.checked
    return filter
  })

const CheckBoxBlock = () => {
  const [filtersState, setFiltersState] = useState(filters)

  const handleCheckboxChange = (e: React.MouseEvent, type: number) => {
    e.preventDefault()
    setFiltersState((state) => changeFilter(state, type))
  }

  return (
    <div className='checkbox-block'>
      <BlockHeader headerText='КОЛИЧЕСТВО ПЕРЕСАДОК' />
      {filtersState.map((filter) => {
        return <CheckBox filter={filter} key={filter.type} handleClick={handleCheckboxChange} />
      })}
    </div>
  )
}

export default CheckBoxBlock
