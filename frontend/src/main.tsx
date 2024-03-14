import React from 'react'
import ReactDOM from 'react-dom/client'
import Routers from './routers/Routers.tsx'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  </React.StrictMode>,
)
