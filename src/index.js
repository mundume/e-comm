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


const rootElement = document.getElementById("root");
render(
  <Suspense fallback={<div>loading...</div>}>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/cart" element={<Cart />} />
    
    <Route path="/login" element={<Login />} />
    <Route path="/product" element={<Product />} />
    <Route path="/productlist" element={<ProductList />} />
    <Route path="/register" element={<Register />} />
    


    </Routes>
  </BrowserRouter>
  </Suspense>,
  rootElement
  
);