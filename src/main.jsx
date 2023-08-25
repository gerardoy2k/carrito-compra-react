import React from 'react'
import ReactDOM from 'react-dom/client'
import { CarritoApp } from './CarritoApp'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <CarritoApp />
    </React.StrictMode>
  </BrowserRouter>
)
