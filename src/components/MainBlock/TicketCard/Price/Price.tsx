import React from 'react'
import './Price.scss'

interface PriceProps {
  price: string
}

const Price = ({ price }: PriceProps) => {
  return (
    <div className='col align-self-center'>
      <div className='ticket-price'>{price}</div>
    </div>
  )
}

export default Price
