import { FavoriteBorderOutlined, Rowing, SearchOutlined, Send, ShoppingCartOutlined } from '@mui/icons-material'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { useNavigate } from 'react-router-dom'

import Headings from './Headings'



const Info = styled.div`

Width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.1);
z-index:3;
display:flex;
align-items:center;
justify-content:center;

cursor:pointer;
${mobile({ flexDirection: 'column', justifyContent: 'space-between' })}
`
 const  Dinner = styled.div`
 display:flex;
 flex-direction:row;
 flex-wrap:wrap;`

 const Container = styled.div`
 flex: 1;
 margin:5px;
 width:280px;
 height:350px;
 display:flex;
 align-items:center;
 justify-content:center;
position:relative;
${mobile ({width:"140px", height:"140px",  flexDirection:'row', margin:'2px'})};

/** &:hover ${Info} {
  opacity:1;*/
}


 `

 const Circle = styled.div`
 width:200px;
 height:200px;
 border-radius:50%;
 background-color:#fff;
 position:absolute;
 ${mobile ({display:"none"})};
 `

 const Image = styled.img`
 height:75%;
 z-index:2;
 `

 const Button = styled.button`
  width: 60%;
  border:none;
  padding: 10px;
  
  color: rgba(0,0,0,0.8);
  cursor:pointer;
  font-weight: 700;
  background-color:white;
  ${mobile ({backgroundColor:"transparent", border:"2px solid #1E5162"})};
  &:hover{
    background-color: #1E5162;
    color:white;
  }
  
  `



 const Icon = styled.div`
 width:40px;
  height:40px;
  border-radius:50%;
  background-color:transparent;
  display:flex;
  align-items:center;
  justify-content:center;
  margin:10px;
  
  ${mobile ({width:"30px", height:"30px"})};


  &:hover {
 background-color:#e9f5f5;
    transform:scale(1.2);
  }
 `
const   Text = styled.div``
 
 const Product = ({ item }) => {
  const navigate = useNavigate()
  return (
    <Dinner>
    <Container>
      <Circle />
      
      <Image src={item.img} />
      <Info>
        
        <Icon style={{color:'#1E5162'}}>
         
          <ShoppingCartOutlined />
          
        </Icon>
        <Button onClick={()=>{
          navigate('/product')
        }}>
         {item.price}
        </Button>
        <Icon style={{color:'#1E5162'}}>
         
          <FavoriteBorderOutlined />
          
        </Icon>
         
       
       
        
      </Info>
    </Container>
    </Dinner>
  );
};


export default Product