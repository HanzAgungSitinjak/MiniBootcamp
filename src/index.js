import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './pages/Home/home.js';
import reportWebVitals from './reportWebVitals';

import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

// import Home from './pages/Home/index.jsx';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <MantineProvider>
      <Home />
    </MantineProvider>
  </React.StrictMode>
);

reportWebVitals();
