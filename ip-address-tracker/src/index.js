import React from 'react';
import ReactDOM from 'react-dom/client';

import { IpProvider } from './IpContext';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IpProvider>
      <App />
    </IpProvider>
  </React.StrictMode>
);

reportWebVitals();
