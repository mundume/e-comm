import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
height:30px;
background-color:lightblue;
color:white;
display : flex;
align-items : center;
justify-content : center;
font-size : 14px;
font-weight : bold;

`

const Announcement = () => {
  return (
    <Container>
        free shipping for all orders over kes 3000!
    </Container>
  )
}

export default Announcement