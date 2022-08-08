import React from 'react'
import CheckBoxBlock from './CheckBoxBlock/CheckBoxBlock'
import RadioButtonBlock from './RadioButtonBlock/RadioButtonBlock'
import './LeftPanel.scss'

const LeftPanel = () => {
  return (
    <div className='left-panel'>
      <CheckBoxBlock />
      <RadioButtonBlock />
    </div>
  )
}

export default LeftPanel
