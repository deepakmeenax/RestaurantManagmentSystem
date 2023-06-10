import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './page/home';
import Header from './components/header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <Header />
      <HomePage />
    </>
  </React.StrictMode>
);
