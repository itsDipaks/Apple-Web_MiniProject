import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import Authcontextfunction from './Context/Authcontext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Authcontextfunction>
 <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </Authcontextfunction>
);


