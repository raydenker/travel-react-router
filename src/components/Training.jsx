import React from 'react'
import { Link } from 'react-router-dom'
import './TrainingStyle.css'
import Pod from '../assets/pod.jpg'
import Moon from '../assets/moon.jpg'

function Training() {
  return (
    <div className="Training_section">
      <div className="Training__left">
        <h1>Training</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          eveniet commodi aut earum dolores eum quo odit nulla ducimus natus
          suscipit deserunt officiis
        </p>
        <Link to="/contact" className="btn">
          Contact
        </Link>
      </div>
      <div className="Training__right">
        <div className="Training__imgs">
          <div className="img_stack top">
            <img src={Moon} className="img" alt="" />
          </div>
          <div className="img_stack bottom">
            <img src={Pod} className="img" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Training
