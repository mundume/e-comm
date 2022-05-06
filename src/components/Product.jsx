import { FavoriteBorderOutlined, SearchOutlined, Send, ShoppingCartOutlined } from '@mui/icons-material'
import styled from 'styled-components'
import { mobile } from '../responsive'
import Headings from './Headings'


const Info = styled.div`
opacity:0;
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

transition:all 0.3s ease;
cursor:pointer;
${mobile({ flexDirection: 'column', justifyContent: 'space-around' })}
`


 const Container = styled.div`
 flex: 1;
 margin:5px;
 max-width:280px;
 height:350px;
 display:flex;
 align-items:center;
 justify-content:center;
position:relative;
${mobile ({maxWidth:"150px", height:"200px"})};
 
&:hover ${Info} {
  opacity:1;
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
  background-color: black;
  color: rgba(0,0,0,0.8);
  cursor:pointer;
  font-weight: 600;
  background-color:white;
  `



 const Icon = styled.div`
 width:40px;
  height:40px;
  border-radius:50%;
  background-color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  margin:10px;
  transition:all 0.3s ease;
  ${mobile ({width:"30px", height:"30px"})};


  &:hover {
 background-color:#e9f5f5;
    transform:scale(1.2);
  }
 `

 
 const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      
      <Image src={item.img} />
      <Info>
        
        <Icon style={{color:'black'}}>
          <ShoppingCartOutlined />
          
        </Icon>
         
        <Button>
         show more!
        </Button>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
        
      </Info>
    </Container>
  );
};


export default Product