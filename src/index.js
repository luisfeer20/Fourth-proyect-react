import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PakemellamaApp } from './PakemellamaApp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TablaProductos from './Components/TablaProductos'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<PakemellamaApp />} />
      <Route path='Inicio' element={<PakemellamaApp />} />
      <Route path='Promociones' element={<PakemellamaApp />} />
      <Route path='Contactanos' element={<PakemellamaApp />} />
      <Route path='TablaProductos' element={<TablaProductos />} />
    </Routes>
  </BrowserRouter >);


