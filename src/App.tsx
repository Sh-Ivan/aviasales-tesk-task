import React, { FC } from 'react'
import Header from './components/Header/Header'
import LeftPanel from './components/LeftPanel/LeftPanel'
import MainBlock from './components/MainBlock/MainBlock'
import './App.scss'

const App: FC = () => (
  <div className='page-layout'>
    <div className='container'>
      <div className='col'>
        <div className='col'>
          <Header />
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-auto'>
          <LeftPanel />
        </div>
        <div className='col-auto'>
          <MainBlock />
        </div>
      </div>
    </div>
  </div>
)

export default App
