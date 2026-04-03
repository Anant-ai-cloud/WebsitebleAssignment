import { useState } from 'react'
import Navbar from './component/Navbar.jsx'
import Hero from './component/Hero.jsx'
import HeroSection from './component/SecondHero.jsx'
import WhatWeCanOffer from './component/WhatWeCanOffer.jsx'
import Testimonials from './component/Testimonials.jsx'
import Newsletter from './component/Newsletter.jsx'



function App() {
  

  return (
   <>
   <Navbar/>
   <Hero/>
   <HeroSection/>
   <WhatWeCanOffer/>
   <Testimonials/>
   <Newsletter/>
   </>
  )
}

export default App
