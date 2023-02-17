import React from 'react'
import './VideoStyle.css'
import spaceVideo from '../assets/space.mp4'
import { Link } from 'react-router-dom'

function Video() {
  return (
    <div className="Video">
      <video autoPlay loop muted id="Video__playing">
        <source src={spaceVideo} type="video/mp4" />
      </video>
      <div className="Video__content">
        <h1>Galaxy. Travel.</h1>
        <p>World's first civilian space travel</p>

        <div className="Video__btns">
          <Link to="/training" className="btn">
            Training
          </Link>
          <Link to="/contact" className="btn btn-light">
            Launch
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Video
