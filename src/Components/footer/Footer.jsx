import React from 'react'
//import {BsWhatsapp} from 'react-icons/bs';
//import {FaFacebookF} from 'react-icons/fa';
// import {FiInstagram} from 'react-icons/fi';
import {MdOutlineEmail} from 'react-icons/md';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
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
            <a href='mailto:janani.kumar.dev@gmail.com'><MdOutlineEmail/></a>
            <a href='https://instagram.com'><FaGithub/></a>
            {/* <a href='https://whatsapp.com'><BsWhatsapp/></a> */}
            <a href='https://Linkedin.com'><BsLinkedin/></a>
        </div>

        <div className='footer__copyright'>
            <small>&copy; Janani Portfoflio. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer
