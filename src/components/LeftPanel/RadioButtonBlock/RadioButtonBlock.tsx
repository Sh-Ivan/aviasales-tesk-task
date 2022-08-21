import React, { useState } from 'react'
import BlockHeader from '../../Shared/BlockHeader'
import RadioButton from '../../Shared/RadioButton'
import './RadioButtonBlock.scss'

export interface IAirlines {
  id: number
  name: string
}

const airlines: IAirlines[] = [
  {
    id: 1,
    name: 'Все',
  },
  {
    id: 2,
    name: 'S7 Airlines',
  },
  {
    id: 3,
    name: 'Xiamen Air',
  },
]

const RadioButtonBlock = () => {
  const [checked, setChecked] = useState(airlines[2].id)

  const handleRadioButtonChange = (e: React.MouseEvent, id: number) => {
    setChecked(id)
  }

  return (
    <div className='radio-button-block'>
      <BlockHeader headerText='КОМПАНИЯ' />
      {airlines.map((airline) => {
        return (
          <RadioButton
            key={airline.id}
            buttonName={airline.name}
            isChecked={airline.id === checked}
            id={airline.id}
            handleClick={handleRadioButtonChange}
          />
        )
      })}
    </div>
  )
}

export default RadioButtonBlock
