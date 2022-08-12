import React from 'react'
import './Button.scss'

interface buttonProps {
  buttonText?: string
  active?: boolean
  name?: string
  handleClick?: (e: React.MouseEvent, name: string) => void
}

const Button = ({ buttonText = '', active = false, handleClick, name = '' }: buttonProps) => {
  const classNames = 'button-primary' + (active ? ' button-selected' : '')

  const handleButtonClick = (e: React.MouseEvent) => {
    if (handleClick) {
      handleClick(e, name)
    }
  }

  return (
    <button className={classNames} onClick={handleButtonClick}>
      {buttonText}
    </button>
  )
}

export default Button
