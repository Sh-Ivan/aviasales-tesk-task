import React from 'react'
import Button from '../../Shared/Button/Button'
import './SortingBlock.scss'

interface ISortingButtons {
  name: string
  text: string
}

const sortingButtons: ISortingButtons[] = [
  {
    name: 'cheapest',
    text: 'САМЫЙ ДЕШЕВЫЙ',
  },
  { name: 'fastest', text: 'САМЫЙ БЫСТРЫЙ' },
  { name: 'optimal', text: 'ОПТИМАЛЬНЫЙ' },
]

const SORTING = 'cheapest'

const SortingBlock = () => {
  return (
    <div className='sorting-block'>
      {sortingButtons.map((button) => {
        return (
          <Button key={button.name} buttonText={button.text} active={button.name === SORTING} />
        )
      })}
    </div>
  )
}

export default SortingBlock
