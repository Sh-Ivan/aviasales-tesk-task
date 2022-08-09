import React from 'react'
import CheckBox from '../../Shared/Checkbox/CheckBox'
import BlockHeader from '../../Shared/BlockHeader/BlockHeader'
import './CheckBoxBlock.scss'

const CheckBoxBlock = () => {
  return (
    <div className='checkbox-block'>
      <BlockHeader headerText='КОЛИЧЕСТВО ПЕРЕСАДОК' />
      <CheckBox />
    </div>
  )
}

export default CheckBoxBlock
