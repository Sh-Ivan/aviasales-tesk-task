import React from 'react'
import { useAppSelector } from '../../../store/hooks'
import { companySelector } from '../../../store/slices/companySlice'
import BlockHeader from '../../Shared/BlockHeader'
import RadioButton from '../../Shared/RadioButton'
import './RadioButtonFilter.scss'

const RadioButtonFilter = () => {
  const { companies } = useAppSelector(companySelector)

  return (
    <div className='radio-button-block'>
      <BlockHeader headerText='компания' />
      {companies.map((company) => {
        return (
          <RadioButton
            key={company.id}
            buttonName={company.name}
            isChecked={company.selected}
            id={company.id}
          />
        )
      })}
    </div>
  )
}

export default RadioButtonFilter
