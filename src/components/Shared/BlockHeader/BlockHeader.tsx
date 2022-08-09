import React from 'react'
import './BlockHeader.scss'

interface BlockHeaderProps {
  headerText: string
}

const BlockHeader = ({ headerText }: BlockHeaderProps) => {
  return <div className='header-text'>{headerText}</div>
}

export default BlockHeader
