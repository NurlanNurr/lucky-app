import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/assets/index.scss'
import { BrowserRouter } from "react-router-dom";
import AllContextProvider from '../src/components/context/AllContextProvider'
import { Provider } from 'react-redux';
import store from '../src/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <AllContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AllContextProvider>
  </React.StrictMode>
  </Provider>
);
