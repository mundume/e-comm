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
const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Location/>

      <Banner/>
      <Headings title="Trending"/>
      <Products/>
      <Headings title="flash sales"/>
      <Products/>
      <Headings title="Lovers Palace"/>
      <Products/>
      <Headings title="Clearence sales"/>
      <Products/>
      <Categories/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home