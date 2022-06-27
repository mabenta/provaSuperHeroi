import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home/index'
import Contact from './pages/consultar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/contato" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);