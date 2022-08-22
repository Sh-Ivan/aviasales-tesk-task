import React from 'react'
import './SkeletonLoading.scss'

const SkeletonLoading = () => {
  return (
    <div className='skeleton-card is-loading'>
      <div className='content'>
        <div className='top-left'></div>
        <div className='top-right'></div>
        <div className='bottom'></div>
      </div>
    </div>
  )
}

export default SkeletonLoading
