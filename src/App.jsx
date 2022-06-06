import { Suspense } from "react";
import Home from "./pages/Home.jsx";
import './translate'
import { render } from "react-dom";
import { BrowserRouter, Route, Routes , Navigate} from "react-router-dom";

import Cart from "./pages/Cart.jsx";
import Sucess from "./pages/Sucess.jsx";
import Login from "./pages/Login.jsx";
import Product from "./pages/Product.jsx";
import ProductList from "./pages/ProductList.jsx";
import Register from "./pages/Register.jsx";

import {  useSelector } from 'react-redux';


const App = () => {
  const user = useSelector(state => state.user);

  return( 
   
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="cart" element={<Cart />} />
    
    <Route path="login" element={user? <Navigate to="/"/>:<Login/>} />
    <Route path="product/:id" element={<Product />} />
    <Route path="products/:category" element={<ProductList />} />
    <Route path="register" element={<Register />} />
    <Route path="sucess" element={<Sucess />} />
    


    </Routes>
  </BrowserRouter>
  

 
    
  
  
  
  
  )};

export default App;