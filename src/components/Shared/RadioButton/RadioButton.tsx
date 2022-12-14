import React from 'react'
import './RadioButton.scss'

interface RadioButtonProps {
  buttonName: string
  isChecked?: boolean
  id: number
  handleClick: (e: React.MouseEvent, id: number) => void
}

const RadioButton = ({ buttonName, isChecked, handleClick, id }: RadioButtonProps) => {
  const handleCheckboxChange = (e: React.MouseEvent) => {
    handleClick(e, id)
  }

  return (
    <div className='radio-button' onClick={handleCheckboxChange}>
      <input type='radio' checked={isChecked} id={buttonName} readOnly />{' '}
      <label htmlFor={buttonName}>{buttonName}</label>
    </div>
  )
}

export default RadioButton
