import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import 'bootstrap/scss/bootstrap-grid.scss'
import './styles/index.scss'

const container = document.getElementById('root')
if (container === null) throw new Error('Can not find root element')
const root = createRoot(container)

root.render(<App />)
