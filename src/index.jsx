import React from 'react'
import './styles/index.scss'
import ReactDOM from 'react-dom/client'
import RoutesPath from './routes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RoutesPath />
  </React.StrictMode>
)
