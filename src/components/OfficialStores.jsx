import React from 'react'
import styled from 'styled-components'
import Headings from './Headings'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
max-height:90px;
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;



`

const Button = styled.button`
  width: auto;
  border:none;
  padding: 10px;
  margin:5px;
  color: rgba(0,0,0,0.8);
  cursor:pointer;
  font-weight: 600;
  background-color:white;
  border-radius:5px;

  &:hover{
    background-color: #1E5162;
    color:white;
  }
  `


const OfficialStores = () => {
  const navigate = useNavigate();
  return (
    <Container>
    <Button onClick={()=>{
      navigate('/productlist')
    }}>NOKIA</Button>
    <Button
    onClick={()=>{
      navigate('/productlist')
    }}>XIAOMI</Button>
    <Button
    onClick={()=>{
      navigate('/productlist')
    }}
    >HOTPOINT</Button>
    <Button
    onClick={()=>{
      navigate('/productlist')
    }}
    >SAMSUNG</Button>
    <Button
    onClick={()=>{
      navigate('/productlist')
    }}
    >MAYBELINE</Button>
    <Button
    onClick={()=>{
      navigate('/productlist')
    }}
    >TECNO</Button>
    <Button
    onClick={()=>{
      navigate('/productlist')
    }}
    >EABL</Button>
    <Button
    onClick={()=>{
      navigate('/productlist')
    }}>REALME</Button>
    </Container>
  )
}

export default OfficialStores