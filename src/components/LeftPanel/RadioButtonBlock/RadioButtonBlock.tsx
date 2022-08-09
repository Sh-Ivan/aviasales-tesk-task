import React from 'react'
import BlockHeader from '../../Shared/BlockHeader/BlockHeader'
import RadioButton from '../../Shared/RadioButton/RadioButton'
import './RadioButtonBlock.scss'

interface RadioButtonBlockProps {
  elements: string[]
}

const RadioButtonBlock = ({ elements }: RadioButtonBlockProps) => {
  return (
    <div className='radio-button-block'>
      <BlockHeader headerText='КОМПАНИЯ' />
      {elements.map((element) => {
        return <RadioButton key={element} buttonName={element} />
      })}
    </div>
  )
}

export default RadioButtonBlock
