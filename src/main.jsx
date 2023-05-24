import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  MainSource } from './components/context/userscontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MainSource>
    <App />
  </MainSource>,
);
