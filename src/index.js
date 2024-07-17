import "./index.css";
import 'boxicons';
import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from './store'; // Importez correctement votre store
import AppWrapper from './App'; // Importez correctement AppWrapper

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  </StrictMode>
);
