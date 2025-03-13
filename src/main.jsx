import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import Router from './Router/Router'
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import store from './Utility/store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </StrictMode>,
  </Provider>
)
