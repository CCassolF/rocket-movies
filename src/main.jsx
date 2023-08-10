import React from 'react'
import ReactDOM from 'react-dom/client'
import { NewMovie } from './pages/NewMovie'

import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewMovie />
  </React.StrictMode>,
)
