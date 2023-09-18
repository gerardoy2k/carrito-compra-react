import React from 'react'
import ReactDOM from 'react-dom/client'
import { RealStateApp } from './RealStateApp'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <RealStateApp />
    </React.StrictMode>
  </BrowserRouter>
)
