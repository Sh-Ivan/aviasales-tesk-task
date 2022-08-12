import React from 'react'
import './AviaLogo.scss'

interface AviaLogoProps {
  image?: string
}

const AviaLogo = ({ image }: AviaLogoProps) => {
  return (
    <div className='avia-logo-wrapper'>
      <img
        src={image ? require(`./img/${image}`) : ''}
        alt='Avia logo'
        width={'110px'}
        height={'36px'}
      />
    </div>
  )
}

export default AviaLogo
