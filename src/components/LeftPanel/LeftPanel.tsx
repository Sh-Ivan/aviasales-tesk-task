import React from 'react'
import CheckBoxBlock from './CheckBoxBlock/CheckBoxBlock'
import RadioButtonBlock from './RadioButtonBlock/RadioButtonBlock'
import './LeftPanel.scss'

const LeftPanel = () => {
  return (
    <aside className='left-panel'>
      <CheckBoxBlock />
      <RadioButtonBlock />
    </aside>
  )
}

export default LeftPanel
