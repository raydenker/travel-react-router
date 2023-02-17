import React, { useState } from 'react'

import { NavLink, Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './NavbarStyle.css'

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }
  const closeMenu = () => setClick(false)

  const [color, setColor] = useState(false)
  const changeColor = () =>{
if(window.scrollY>=100){
  setColor(true)
} else {
  setColor(false)
}
  }
window.addEventListener('scroll', changeColor)
  return (
    <div className={color ? "Navbar scroll" : "Navbar" }>
      <Link to="/" className='Navbar__logo'>GLX TRVL</Link>
      <ul className={click ? "Navbar__menu active" : "Navbar__menu" }>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'current' : undefined)}
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pricing"
            className={({ isActive }) => (isActive ? 'current' : undefined)}
            onClick={closeMenu}
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/training"
            className={({ isActive }) => (isActive ? 'current' : undefined)}
            onClick={closeMenu}
          >
            Training
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'current' : undefined)}
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="Navbar__humburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: '#ffffff' }} />
        ) : (
          <FaBars size={30} style={{ color: '#ffffff' }} />
        )}
      </div>
    </div>
  )
}

export default Navbar
