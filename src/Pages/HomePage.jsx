import React from 'react'
import Hero from '../Components/Hero'
import WhatWeOffer from '../Components/Whatweoffer'
import Vision from '../Components/Vision'
import WhyChooseUsSection from '../Components/WhyChooseUs'
import HowItWorksSection from '../Components/Howwework'
import ContactUs from '../Components/Contactus'
function HomePage() {
  return (
    <>
        <Hero />
        <WhatWeOffer />
        <Vision />
        <HowItWorksSection/>
        <WhyChooseUsSection/>
        <ContactUs/>

    </>
  )
}

export default HomePage
