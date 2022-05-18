
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { useTranslation } from 'react-i18next'
import { useNavigate} from 'react-router-dom'


const Container = styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;
display:flex;


`
const Image = styled.img`
width:100%;

object-fit:cover;
${mobile ({maxHeight:"200px", width:'100%', flexWrap:'wrap'})};
`

const Info = styled.div`
position:absolute;
top:0;
left:0;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:100%;
height:100%;
${mobile({ fontSize:'12px', justifyContent:'space-around'})}

`
const Title = styled.h1`
color:rgba(0,0,0,0.8);
margin-bottom:15px;

`

const Button = styled.button`
border:none;
padding:10px;
background-color:white;
font-weight:600;
cursor:pointer;

`

const CategoryItem = ({category}) => {
  const navigate = useNavigate()
  const {t} = useTranslation(["common"])
  return (
     
    <Container>

       <Image src={category.img}/>
        <Info>
            
            <Title>{category.title}</Title>
            <Button onClick={()=>{
          navigate(`/products/${category.cat}`)
        }}>{t("shopnow")}</Button>
            </Info>
      
        
    </Container>
  )
}

export default CategoryItem