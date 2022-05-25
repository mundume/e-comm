import React, { Suspense } from 'react';
import './translate'
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from 'react-dom';
import Cart from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Product from "./pages/Product.jsx";
import ProductList from "./pages/ProductList.jsx";
import Register from "./pages/Register.jsx";
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';


const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
  
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="cart" element={<Cart />} />
    
    <Route path="login" element={<Login />} />
    <Route path="product/:id" element={<Product />} />
    <Route path="products/:category" element={<ProductList />} />
    <Route path="register" element={<Register />} />
    


    </Routes>
  </BrowserRouter>
  
  </Suspense>
  </Provider>
  ,

  rootElement
  
);