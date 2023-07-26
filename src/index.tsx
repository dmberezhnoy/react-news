import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/App.tsx';

const rootContainer = document.getElementById('root');

if (!rootContainer) {
  throw new Error('Не удалось получить корневой элемент приложения');
}

ReactDOM.createRoot(rootContainer).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
