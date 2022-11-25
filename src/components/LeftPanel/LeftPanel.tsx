import React from 'react'
import CheckBoxFilter from './CheckBoxFilter'
import RadioButtonFilter from './RadioButtonFilter'
import './LeftPanel.scss'

const LeftPanel = () => {
  return (
    <aside className='left-panel'>
      <CheckBoxFilter />
      <RadioButtonFilter />
    </aside>
  )
}

export default LeftPanel
