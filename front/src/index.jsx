import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
{/* <script type="module" src="/src/index.jsx"></script> */}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    document.getElementById('root')

);
