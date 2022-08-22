import React from 'react'
import CheckBoxBlock from './CheckBoxFilter'
import RadioButtonFilter from './RadioButtonFilter'
import './LeftPanel.scss'

const LeftPanel = () => {
  return (
    <aside className='left-panel'>
      <CheckBoxBlock />
      <RadioButtonFilter />
    </aside>
  )
}

export default LeftPanel
