import React from 'react'
import { useAppDispatch } from '../../../store/hooks'
import { changeCompanyFilter } from '../../../store/slices/companySlice'
import './RadioButton.scss'

interface RadioButtonProps {
  buttonName: string
  isChecked?: boolean
  id: string
}

const RadioButton = ({ buttonName, isChecked, id }: RadioButtonProps) => {
  const dispatch = useAppDispatch()

  const handleCheckboxChange = () => {
    dispatch(changeCompanyFilter(id))
  }

  return (
    <div className='radio-button' onClick={handleCheckboxChange}>
      <input type='radio' checked={isChecked} id={buttonName} readOnly />{' '}
      <label htmlFor={buttonName}>{buttonName}</label>
    </div>
  )
}

export default RadioButton
