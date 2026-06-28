import React from 'react';
import ReactDOM from 'react-dom/client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './i18n/en.js';
import id from './i18n/id.js';
import App from './App';
import './index.css';

// Dark mode default
document.documentElement.classList.add('dark');

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    id: { translation: id },
  },
  lng: localStorage.getItem('portfolio-lang') || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

// Sync <html lang> attribute
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
  localStorage.setItem('portfolio-lang', lng);
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
