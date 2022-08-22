import React, { useState } from 'react'
import Button from '../../Shared/Button'
import './SortingBlock.scss'

interface ISortingButtons {
  name: string
  text: string
}

const sortingButtons: ISortingButtons[] = [
  {
    name: 'cheapest',
    text: 'самый дешевый',
  },
  { name: 'fastest', text: 'самый быстрый' },
  { name: 'optimal', text: 'оптимальный' },
]

const SortingBlock = () => {
  const [sorting, setSorting] = useState(sortingButtons[0].name)

  const handleSortingChange = (e: React.MouseEvent, name: string) => {
    e.preventDefault()
    setSorting(name)
  }

  return (
    <div className='sorting-block'>
      {sortingButtons.map((button) => {
        return (
          <Button
            key={button.name}
            buttonText={button.text}
            name={button.name}
            active={button.name === sorting}
            handleClick={handleSortingChange}
          />
        )
      })}
    </div>
  )
}

export default SortingBlock
