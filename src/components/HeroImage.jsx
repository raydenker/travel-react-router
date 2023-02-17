import React from 'react'
import './HeroImageStyle.css'

function HeroImage({ heading, text }) {
  return (
    <div className="HeroImage">
      <div className="HeroImage__heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default HeroImage
