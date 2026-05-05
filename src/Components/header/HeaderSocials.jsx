import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
//import {FiDribbble} from 'react-icons/fi';
//import {ImWhatsapp} from 'react-icons/im';
import {MdOutlineEmail} from 'react-icons/md';
import './Header.css';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com/in/janani-jayakumar121299" target="_blank" rel="noreferrer">
          <BsLinkedin/>
       </a>
      <a href="https://github.com/Janani1299" target="_blank" rel="noreferrer">
          <FaGithub/>
      </a>
      {/* <a href="https://dribble.com" target="_blank" rel="noreferrer">
          <FiDribbble/>
      </a> */}
      <a href="mailto:janani.kumar.dev@gmail.com" target="_blank" rel="noreferrer">
          <MdOutlineEmail/>
      </a>
    </div>
  )
}

export default HeaderSocials
