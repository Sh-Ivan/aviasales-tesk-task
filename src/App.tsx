import React, { FC, useEffect } from 'react'
import Header from './components/Header/Header'
import LeftPanel from './components/LeftPanel/LeftPanel'
import MainBlock from './components/MainBlock/MainBlock'
import './App.scss'
import { fetchTickets } from './store/slices/ticketSlice'
import { fetchCompanies } from './store/slices/companySlice'
import { useAppDispatch } from './store/hooks'
import SearchBlock from './components/SearchBlock/SearchBlock'
import Divider from './components/Shared/Divider/Divider'

const App: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTickets())
  }, [])

  useEffect(() => {
    dispatch(fetchCompanies())
  }, [])

  return (
    <div className='page-layout'>
      <div className='container'>
        <div className='row'>
          <Header />
        </div>
        <div className='row justify-content-center'>
          <SearchBlock />
        </div>
        <div className='row justify-content-center'>
          <Divider />
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
}

export default App
