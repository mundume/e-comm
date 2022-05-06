import React from 'react'
import styled from 'styled-components'
import Headings from './Headings'

const Container = styled.div`
height:200px;
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;


`

const Button = styled.button`
  width: auto;
  border:none;
  padding: 10px;
  margin:10px 5px;
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
  return (
    <Container>
    <Button>NOKIA</Button>
    <Button>XIAOMI</Button>
    <Button>HOTPOINT</Button>
    <Button>SAMSUNG</Button>
    <Button>MAYBELINE</Button>
    <Button>TECNO</Button>
    <Button>EABL</Button>
    <Button>REALME</Button>
    </Container>
  )
}

export default OfficialStores