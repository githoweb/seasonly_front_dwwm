import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import store from './store/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import { AuthProvider } from './context/AuthProvider';

import './styles.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </Provider>
  </BrowserRouter>,
);
