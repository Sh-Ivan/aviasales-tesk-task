import React from 'react'
import './AviaLogo.scss'

interface AviaLogoProps {
  image: string
}

const AviaLogo = ({ image }: AviaLogoProps) => {
  return (
    <div className='col avia-logo-wrapper'>
      <img src={image} alt='Avia logo' />
    </div>
  )
}

export default AviaLogo
