import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { Badge } from '@mui/material'
import { mobile } from '../responsive'
import { Link, useNavigate } from 'react-router-dom'

const Container = styled.div`
height:60px;
${mobile ({height:"50px"})};

`
const Wrapper = styled.div`
 padding 10px 20px;
 display:flex;
 justify-content:space-between;
 align-items:center;
 ${mobile ({padding:"10px 0px"})};
`
const Left = styled.div`
flex:1;
display:flex;
align-items:center;




`
const Language = styled.span`
font-size:14px;
cursor : pointer;
${mobile ({padding:"0px 10px"})}
`
const SearchContainer = styled.div`
border:0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
${mobile ({display:"none"})};

`
const Input = styled.input`
border:none;
${mobile ({display:"none"})};

:focus{
    outline:none;
}

`
const Center = styled.div`
flex:1;
text-align:center;



`
const Logo = styled.h1`
font-weight:bold;
cursor:pointer;
${mobile ({fontSize:"24px"})};

`
const Right = styled.div`

flex:1;
display:flex;
align-items:center;
justify-content:center;

${mobile ({flex:2, justifyContent:"space-around", alignItems:"center"})};

`
const MenuItem = styled.div`
font-size:14px;
curson:pointer;
margin-left:10px;
${mobile ({fontSize:"10px" , marginRight:"10px", padding:"0px 7px"})};
`

const Button = styled.button`
  width: auto;
  margin-left:20px; 
  border:none;
  padding: 10px;
  background-color: lightblue;
  border-radius: 5px;
  color: rgba(0,0,0,0.8);
  cursor:pointer;
  font-weight: 600;
  ${mobile ({fontSize:"12px" , marginLeft:"8px"})};`
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
        <Wrapper>
        <Left>
        <Language>EN</Language>
        <SearchContainer>
            <Input placeholder='search'/>
            <Search style={{color:"gray", fontSize:16}}/>
        </SearchContainer>
        </Left>
        <Center>
            <Logo><Link to='/' style={{color:'rgba(0,0,0,0.8)', textDecoration:'none'}} >Kart</Link></Logo>
        </Center>
        <Right>
        <Button onClick={()=>{
         navigate('/register')
        }}>Register </Button>
        <Button onClick={()=>{
          navigate('/login')
        }}>SignIn</Button>
        <MenuItem> 
        <Badge badgeContent={4} color="primary">
        <ShoppingCartOutlined/>
        </Badge>
        </MenuItem>
        </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar