import React from 'react'
import './AviaLogo.scss'

interface AviaLogoProps {
  image: string
}

const AviaLogo = ({ image }: AviaLogoProps) => {
  return (
    <div className='avia-logo-wrapper'>
      <img src={image} alt='Avia logo' />
    </div>
  )
}

export default AviaLogo
