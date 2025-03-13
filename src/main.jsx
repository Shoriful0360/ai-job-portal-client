import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Router from './Router/Router'
import { BrowserRouter } from 'react-router'
import AuthProvider from './Utility/AuthProvidor'



createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <StrictMode>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </StrictMode>,
  </AuthProvider>
)
