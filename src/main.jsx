import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Router from './Router/Router'
import { BrowserRouter } from 'react-router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <BrowserRouter>
      <Router></Router>
 </BrowserRouter>
  </StrictMode>,
)
