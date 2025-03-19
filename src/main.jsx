import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Router from './Router/Router'
import { BrowserRouter } from 'react-router'
import AuthProvider from './Utility/AuthProvidor'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <StrictMode>
        <BrowserRouter>
          <Router></Router>
        </BrowserRouter>
      </StrictMode>,
    </AuthProvider>
  </QueryClientProvider>
)
