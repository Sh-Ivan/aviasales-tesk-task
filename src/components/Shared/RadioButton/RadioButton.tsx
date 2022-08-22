import React from 'react'
import './RadioButton.scss'

interface RadioButtonProps {
  buttonName: string
  isChecked?: boolean
  id: string
  handleClick: (e: React.ChangeEvent, id: string) => void
}

const RadioButton = ({ buttonName, isChecked, handleClick, id }: RadioButtonProps) => {
  const handleCheckboxChange = (e: React.ChangeEvent) => {
    handleClick && handleClick(e, id)
  }

  return (
    <div className='radio-button'>
      <input type='radio' checked={isChecked} onChange={handleCheckboxChange} />{' '}
      <label>{buttonName}</label>
    </div>
  )
}

export default RadioButton
