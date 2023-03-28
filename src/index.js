import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import '../src/styles/Header.module.scss'
import '../src/styles/Main.scss'
import '../src/styles/About.scss'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <BrowserRouter>
    <App />
  </BrowserRouter>

);
