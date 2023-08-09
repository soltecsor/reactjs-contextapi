import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContextProviders } from './contexts';
import  './index.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextProviders/>
  </React.StrictMode>
);

