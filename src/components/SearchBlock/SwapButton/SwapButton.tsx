import React, { useState } from 'react'
import './SwapButton.scss'
import SwapHowered from './SwapHowered.svg'
import Swap from './Swap.svg'

interface SwapButtonProps {
  handleClick: () => void
}

const SwapButton = ({ handleClick }: SwapButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const toggleHover = () => {
    setIsHovered(!isHovered)
  }

  return (
    <div
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      className='swap-button'
      onClick={handleClick}
    >
      {isHovered ? <img src={SwapHowered} alt='Swap' /> : <img src={Swap} alt='Swap' />}
    </div>
  )
}

export default SwapButton
