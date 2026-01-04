/**
 * main.jsx
 * Alternative entry point for Vite-based React applications
 * Performs same function as index.js but with Vite-specific imports
 * Mounts the React application to the DOM root element
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Create root and mount the application
// Note: Vite uses .jsx extension for JSX files
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

