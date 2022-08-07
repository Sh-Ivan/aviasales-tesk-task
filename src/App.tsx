import React, { FC } from 'react'
import Header from './components/Header/Header'
import LeftPanel from './components/LeftPanel/LeftPanel'
import MainBlock from './components/MainBlock/MainBlock'

const App: FC = () => (
  <div>
    <Header />
    <LeftPanel />
    <MainBlock />
  </div>
)

export default App
