import styled from 'styled-components'
import React from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import { sliderItems } from '../data'
import { mobile, tablet } from '../responsive'

const Container = styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
overflow:hidden;
color:rgba(0,0,0,0.7);
${mobile ({display:"none"})};
`
const Arrow = styled.div`
width:50px;
height:50px;
background-color:#fff;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
margin:auto;
left:${props => props.direction === 'left' && '10px'};
right:${props => props.direction === 'right' && '10px'};
cursor:pointer;
opacity:0.5;
z-index:1;
`
const Wrapper = styled.div`
height:100%;
display:flex;
transition:all 0.8s ease-in-out;
transform:translateX(${props => props.slideIndex * -100}vw);
`
const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color:${props => props.bg};
`


const ImgContainer = styled.div`
height:80%;
flex:1;`
 const Image = styled.img`
 height:100%;
 

 
 `

const InfoContainer = styled.div`
padding:50px;
flex:1;`
const Title = styled.h1`
font-size:70px;`
const Desc  = styled.p`
margin:50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px;
`
const Button = styled.button`
padding:10px;
font-size:20px;
background-color:trasnparent;
cursor:pointer;
border:none;
outline:none;
font-weight:bold;

&:hover {
    background-color:rgba(0,0,0,0.1);
}
`


const Slider = () => {

const [slideIndex,setSlideIndex] = React.useState(0) 
    const handleClick = (direction) => {
     if(direction==="left"){
     setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
    } else {
        setSlideIndex(slideIndex<2 ? slideIndex +1 : 0)
    }
}
  return (
   <Container>
    <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined/>
    </Arrow>
    <Wrapper slideIndex ={slideIndex}>
        {sliderItems.map((item) => (
        <Slide bg={item.bg} key={item.id}>
     <ImgContainer>
     <Image src={item.img}/>
     </ImgContainer>
     <InfoContainer>
        <Title>{item.title}</Title>
        <Desc>{item.desc}</Desc>
        < Button>Shop Now</Button>
     </InfoContainer>
    
     </Slide>
    ))}
    </Wrapper>
    <Arrow direction="right"  onClick={()=>handleClick("right")}>
        <ArrowRightOutlined/>
    </Arrow>
   </Container>
  )
}

export default Slider