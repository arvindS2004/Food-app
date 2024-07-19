import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './pages/StoreContext';
const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextProvider>
    <App />
  </StoreContextProvider>
    
  </BrowserRouter>
);