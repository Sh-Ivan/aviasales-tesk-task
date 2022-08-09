import React from 'react'
import './RadioButton.scss'

interface RadioButtonProps {
  buttonName: string
}

const RadioButton = ({ buttonName }: RadioButtonProps) => {
  return (
    <div className='radio-button'>
      <input type='radio' /> <label>{buttonName}</label>
    </div>
  )
}

export default RadioButton
