import React from 'react'
import CheckBoxBlock from './CheckBoxBlock/CheckBoxBlock'
import RadioButtonBlock from './RadioButtonBlock/RadioButtonBlock'
import './LeftPanel.scss'

const LeftPanel = () => {
  return (
    <div className='left-panel'>
      <CheckBoxBlock />
      <RadioButtonBlock elements={['Все', 'S7 Airlines', 'Xiamen Air']} />
    </div>
  )
}

export default LeftPanel
