import React from 'react'
import './Button.scss'

interface buttonProps {
  buttonText?: string
  active?: boolean
}

const Button = ({ buttonText = '', active = false }: buttonProps) => {
  const classNames = 'button-primary' + (active ? ' button-selected' : '')
  return <button className={classNames}>{buttonText}</button>
}

export default Button
