import React from 'react'
import ReactDOM from 'react-dom/client'
import { HomePage } from './Components/Home.jsx'
import './Styles/homePage.css'
import './Styles/body.css'
import { PetShopApp } from './petShopApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PetShopApp />
  </React.StrictMode>,
)
