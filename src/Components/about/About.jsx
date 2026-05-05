import React from 'react';
import ME from '../../assets/images/januu.png';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
import './About.css';

function About() {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
              <img src={ME} alt='About me' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>4.3 years working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Support</h5>
              <small>24/7</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ completed</small>
            </article>

          </div>

          <p>
            Frontend Developer with 4.3 years of experience building scalable and responsive web applications using React.js, TypeScript, and JavaScript (ES6+).
            Strong expertise in component-based architecture, REST API integration, and state management using Redux Toolkit. Experienced in improving application performance by optimizing component rendering and managing efficient state updates.
            Currently expanding skills in Next.js and modern frontend performance techniques. Passionate about creating clean, user-friendly, and high-performance UI with a focus on maintainability and best practices.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About;
