import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import App from './App'
import 'bootstrap/scss/bootstrap-grid.scss'
import './styles/index.scss'

const container = document.getElementById('root')
if (container === null) throw new Error('Can not find root element')
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
