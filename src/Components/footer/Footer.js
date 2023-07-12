import React from 'react'
import {BsWhatsapp} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'>Janani</a>
      <ul className='permalinks'>
          <li><a href='#'>Home</a> </li>
          <li><a href='#about'>About</a> </li>
          <li><a href='#experience'>Experience</a> </li>
          <li><a href='#portfolio'>Portfoflio</a> </li>
          <li><a href='#testimonials'>Testimonials</a> </li>
          <li><a href='#contact'>Contact</a> </li>
        </ul>

        <div className='footer__socials'>
            <a href='https://facebook.com'><FaFacebookF/></a>
            <a href='https://instagram.com'><FiInstagram/></a>
            <a href='https://whatsapp.com'><BsWhatsapp/></a>
        </div>

        <div className='footer__copyright'>
            <small>&copy; Janani Portfoflio. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer
