import React from 'react'
import NumerologyForm from '../components/Numerology/NumerologyForm'
import NumerologyReport from '../components/Numerology/NumerologyReport'
import WhatAndWhyNumerology from '../components/Numerology/WhatAndWhyNumerology'
import HowNumerologyWorks from '../components/Numerology/HowNumerologyWorks'
import NumerologyFaq from '../components/Numerology/NumerologyFaq'
import Testimonial from '../components/TestimonialSection'

const NumerlogyCal = () => {
  return (
    <div>
      <div style={{background : 'url("https://kamleshyadav.com/html/astrology/version-3/assets/images/bg10.jpg")', backgroundPosition : 'center'}} className="relative bg-black text-white " id="banner">
        {/* Main Section Content */}
        <div className="relative z-10 py-24 text-center">
          <h1 className="text-4xl font-bold">Numerology Calculation</h1>
          <p className="mt-4 mb-6">Home 🡆 Numerology Calculation</p>
        </div>

      </div>
      <NumerologyForm />
      <NumerologyReport />
      <WhatAndWhyNumerology />
      <HowNumerologyWorks />
      <Testimonial />
      <NumerologyFaq />
    </div>
  )
}

export default NumerlogyCal
