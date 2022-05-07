import React from 'react'
import styled from 'styled-components'
import { popularProducts} from '../data'
import Product from './Product'
import { mobile } from '../responsive';
import { ArrowRightOutlined } from '@mui/icons-material';

const Container = styled.div`
max-height:150px;
padding: 20px;
display: flex;
flex-wrap:wrap;
justify-content: space-between;
background-color: lightblue;

${mobile({flexWrap:'noWrap', overflowX:'scroll'})}

`




const Products = () => {
  const [slideIndex, setSlideIndex] = React.useState(0)
  return (
    <Container>

      
      {popularProducts.map((item) => (
       
        <Product item={item} key={item.id}
        />
      ))}
    </Container>
  );
};

export default Products