import React, { Suspense } from 'react';
import App from './App';
import './translate'
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';


const rootElement = document.getElementById("root");

render(
  
  <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
   </Suspense>
   </Provider>,
  

  rootElement
  
);