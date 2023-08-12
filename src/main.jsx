import React from 'react'
import ReactDOM from 'react-dom/client'
import { MoviePreview } from './pages/MoviePreview'

import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MoviePreview />
  </React.StrictMode>,
)
