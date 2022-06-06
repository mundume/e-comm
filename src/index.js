import React, { Suspense } from 'react';
import App from './App';
import './translate'
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {store , persistor}from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'


const rootElement = document.getElementById("root");

render(
  
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
   </Suspense>
   </PersistGate>
   </Provider>,
  

  rootElement
  
);