import React, { useState } from 'react'
import { useAppSelector } from '../../../store/hooks'
import { companySelector } from '../../../store/slices/companySlice'
import BlockHeader from '../../Shared/BlockHeader'
import RadioButton from '../../Shared/RadioButton'
import './RadioButtonFilter.scss'

const RadioButtonFilter = () => {
  const { companies } = useAppSelector(companySelector)
  const [checked, setChecked] = useState('all')

  const handleRadioButtonChange = (e: React.MouseEvent, id: string) => {
    setChecked(id)
  }

  return (
    <div className='radio-button-block'>
      <BlockHeader headerText='КОМПАНИЯ' />
      <RadioButton
        key={'all'}
        buttonName={'Все'}
        isChecked={'all' === checked}
        id={'all'}
        handleClick={handleRadioButtonChange}
      />
      {companies.map((company) => {
        return (
          <RadioButton
            key={company.id}
            buttonName={company.name}
            isChecked={company.id === checked}
            id={company.id}
            handleClick={handleRadioButtonChange}
          />
        )
      })}
    </div>
  )
}

export default RadioButtonFilter
