import React from 'react'
import CheckBox from '../../Shared/Checkbox'
import BlockHeader from '../../Shared/BlockHeader'
import './CheckBoxFilter.scss'
import { useAppSelector } from '../../../store/hooks'
import { transersSelector } from '../../../store/slices/filtersSlice'

const CheckBoxFilter = () => {
  const transfers = useAppSelector(transersSelector)

  return (
    <div className='checkbox-block'>
      <BlockHeader headerText='количество пересадок' />
      {transfers.map((transfer) => {
        return <CheckBox filter={transfer} key={transfer.type} />
      })}
    </div>
  )
}

export default CheckBoxFilter
