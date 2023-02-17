import React from 'react'
import HeroImage from '../components/HeroImage'
import PricingCards from '../components/Pricing'

function Pricing() {
  return (
    <div className="Pricing">
      <HeroImage heading="PRICING." text="Choose your trip" />
      <PricingCards />
    </div>
  )
}

export default Pricing
