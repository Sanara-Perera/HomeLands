/**
 * index.js
 * Application entry point - mounts the React app to the DOM
 * Wraps the app in StrictMode for development warnings and best practices
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Get the root DOM element where React will mount
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);