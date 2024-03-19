import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/homePage.css'
import './Styles/body.css'
import { PetShopApp } from './petShopApp.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PetShopApp />
    </BrowserRouter>
  </React.StrictMode>,
)
