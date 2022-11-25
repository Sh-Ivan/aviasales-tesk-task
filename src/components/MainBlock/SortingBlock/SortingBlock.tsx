import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { changeSortingOrder, sortingSelector } from '../../../store/slices/sortingSlice'
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
  const sorting = useAppSelector(sortingSelector)
  const dispatch = useAppDispatch()

  const handleSortingChange = (e: React.MouseEvent, name: string) => {
    e.preventDefault()
    dispatch(changeSortingOrder(name))
  }

  return (
    <div className='sorting-block'>
      {sortingButtons.map((button) => {
        return (
          <Button
            key={button.name}
            buttonText={button.text}
            name={button.name}
            active={button.name === sorting.order}
            handleClick={handleSortingChange}
          />
        )
      })}
    </div>
  )
}

export default SortingBlock
