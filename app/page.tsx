import React from 'react'
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Seccards from './Seccards/Seccards';
import Cardtwo from './Cardtwo/Cardtwo';
import Cardthree from './Cardthree/Cardthree';
import Cardfour from './Cardfour/Cardfour';
import Cardfive from './Cardfive/Cardfive';
import Cardsix from './Cardsix/Cardsix';
import InfoCard from './Infocard/Infocard';
import ProductGrid from './ProductGrid/ProductGrid';
import CardSlider from './CardSlider/CardSlider';
import Add from './Add/Add';
import Cardsimg from './Cardsimg/Cardsimg';
import NewsletterSignup from './NewsletterSignup/NewsletterSignup';
 import Footer from './Footer/Footer';
import BannerCarousel from './BannerCarousel/BannerCarousel';
const page = () => {
  return (
    <div>
      <BannerCarousel/>
       <Navbar/> 
      <Hero/>
      <Seccards/>
      <Cardtwo/>
      <Cardthree/>
      <Cardfour/>
      <Cardfive/>
      <Cardsix/>
      <InfoCard/>
      <ProductGrid/>
      <CardSlider/>
      <Add/>
      <Cardsimg/>
      <NewsletterSignup/>
      <Footer/> 
    </div>
  )
}
export default page



