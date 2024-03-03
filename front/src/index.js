import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const axios = require('axios');
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

axios.get('http://localhost:8080')
  .then(response => {
    console.log(response.data); // This will log the response from your frontend
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

reportWebVitals();
