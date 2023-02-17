import React from 'react'
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from 'react-icons/fa'
// import { NavLink, Link } from 'react-router-dom'
import './FooterStyle.css'

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__container">
        <div className="Footer__left">
          <div className="Footer__location">
            <FaSearchLocation
              size={20}
              style={{ color: '#fff', marginRight: '2rem' }}
            />
            <div>
              <p>123 Acme St.</p>
              <h4>Houston, Tx</h4>
            </div>
          </div>
          <div className="Footer__phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
            <a href="tel:+">1-800--123-1234</a>
            </h4>
          </div>
          <div className="Footer__email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              <a href="mailto:+">trips@galaxy.com</a>
            </h4>
          </div>
        </div>
        <div className="Footer__right">
          <h4>About the company</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minus, aut voluptatibus quisquam mollitia temporibus sequi asperiores soluta quos reprehenderit iusto repellendus dignissimos consequuntur amet sit! Ad expedita iure doloribus.
          </p>
          <div className="Footer__social">
              <a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebook   size={30}
              style={{ color: '#fff', marginRight: '1rem' }}/></a>
              <a href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedin   size={30}
              style={{ color: '#fff', marginRight: '1rem' }}/></a>
              <a href="http://" target="_blank" rel="noopener noreferrer"><FaTwitter   size={30}
              style={{ color: '#fff', marginRight: '1rem' }}/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
