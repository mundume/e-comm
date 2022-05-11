import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Location from '../components/Location'
import Banner from '../components/Banner'
import Headings from '../components/Headings'
import OfficialStores from '../components/OfficialStores'
import { useTranslation } from 'react-i18next'
const Home = () => {
  const {t} = useTranslation(["Home"]);
  return (
    <div>
      <Announcement/>
      <Navbar></Navbar>
      <Location ></Location>
      <Banner/>
      <Headings title={t("title1")}/>
      <Products/>
      <Headings title={t("title2")}/>
      <Products/>
      <Headings title={t("title3")}/>
      <Products/>
      <Headings title={t("title4")}/>
      <Products/>
      <Categories/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home