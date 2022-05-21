import {useState, useEffect} from 'react'
import styled from 'styled-components'
import { popularProducts} from '../data'
import Product from './Product'
import { mobile } from '../responsive';
import { ArrowRightOutlined } from '@mui/icons-material';
import axios from 'axios'

const Container = styled.div`

padding: 20px;
display: flex;
flex-wrap:wrap;
justify-content: space-between;
background-color: lightblue;

${mobile({flexWrap:'noWrap', overflowX:'scroll'})}

`




const Products = ({cat, filters, sort}) => {
  const [products, setproducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  //fetching products
useEffect(()=>{
  const getProducts = async ()=>{
    try{
      const res = await axios.get( cat ? `http://localhost:5000/api/products?category=${cat}`: "http://localhost:5000/api/products")
     setproducts(res.data)
    }catch(err){

    }
  };
  getProducts()
},[cat])
//filtering
useEffect(()=>{
  cat && 
  setFilteredProducts(
  products.filter((item) =>Object.entries(filters).every(([key,value]) =>
    item[key].includes(value)
  ))
  );
},[products, cat,filters])

//sorting
  
useEffect(()=>{
  if(sort==="newest"){
    setFilteredProducts(prev=>
    [...prev].sort((a,b)=>a.createdAt-b.createdAt))
  }else if(sort==="asc"){
    setFilteredProducts(prev=>
    [...prev].sort((a,b)=>a.price-b.price))
  }else {
    setFilteredProducts(prev=>
    [...prev].sort((a,b)=>b.price-a.price))
  }
},[sort])



  return (
    <Container>

      
      {cat ? filteredProducts.map((item) => (
       
        <Product item={item} key={item.id}
        />
      )) :products
      .slice(0,8)
      .map((item) => (
       
        <Product item={item} key={item.id}
        />
      )) }
    </Container>
  );
};

export default Products