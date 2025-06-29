import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Roteador from './roteador';
import "./index.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.css";


const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
  <React.StrictMode>
    <Roteador />
  </React.StrictMode>,
);
}
