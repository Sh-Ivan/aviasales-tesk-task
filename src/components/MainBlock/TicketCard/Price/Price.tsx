import React from 'react'
import './Price.scss'

interface PriceProps {
  price: string
}

const Price = ({ price }: PriceProps) => {
  return <div className='ticket-price'>{price}</div>
}

export default Price
