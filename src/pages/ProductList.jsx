import {useState} from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { useTranslation } from 'react-i18next'
import {useLocation} from 'react-router-dom'



const Container = styled.div`
`

const Title = styled.h1`
margin:20px;
color:rgba(0,0,0,0.7);

`

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`

const Filter = styled.div`
margin:20px; 
${mobile({margin: "0px 20px", display: "flex", flexDirection: "column"})}

`

const FilterText = styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
color:rgb(0,0,0,0.7);
${mobile({marginRight: "0px" })}

`
const Select = styled.select`
padding:10px;
margin-right:20px;
outline:none;
border:1px solid lightblue;
background:none;
${mobile({margin: "10px 0px" })}
`

const Option = styled.option`
font-size:15px;
`

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2]
    const [filters , setFilters] = useState({})
    const [sort , setSort] = useState("newest")
    const handleFilters = (e) => {
        const value = e.target.value;

        setFilters({
            ...filters,
            [e.target.name] : value
        })
    }

const {t} = useTranslation(["Productlists"])
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>{t("clothes")}</Title>
        <FilterContainer>
            <Filter> <FilterText> {t("filterproduct")}</FilterText>
                <Select name='All' onChange={handleFilters}>
                    <Option>
                        {t("all")}
                    </Option>
                    <Option>{t("phones")}</Option>
                    <Option>{t("clothes")}</Option>
                    <Option>{t("furniture")}</Option>
                    <Option>{t("electronics")}</Option>
                    
                </Select>

                <Select name = "type" onChange={handleFilters}>
                    <Option>
                        {t("type")}
                    </Option>
                    <Option>{t("color")}</Option>
                    <Option>{t("price")}</Option>
                    <Option>{t("size")}</Option>
                    <Option>{t("inn")}</Option>
                    
                </Select>

             </Filter>
            <Filter><FilterText>{t("sortproducts")}</FilterText>
            <Select onChange={e=>setSort(e.target.value)}>

                    <Option value="newest">{t("newest")}</Option>
                    <Option value = "popular">{t("popularity")}</Option>
                    <Option value="available">{t("availability")}</Option>
                </Select>
            </Filter>

        </FilterContainer>
        <Products cat= {cat} filters= {filters} sort={sort} />
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList