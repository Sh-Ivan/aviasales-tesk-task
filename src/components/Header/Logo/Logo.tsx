import React from 'react'
import './Logo.scss'
import MainLogo from './Logo.svg'

const Logo = () => {
  return (
    <div className='wrapper-logo'>
      <img src={MainLogo} alt='logo' />
    </div>
  )
}

export default Logo
