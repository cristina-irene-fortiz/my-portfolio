// src/index.js
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    {/* normalize + set background */}
    <CssBaseline />
    <App />
  </ThemeProvider>
);
