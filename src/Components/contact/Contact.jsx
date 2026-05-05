import React from 'react';
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md';
// import {RiMessengerLine} from 'react-icons/ri';
import {BsLinkedin} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

function Contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='.contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>janani.kumar.dev@gmail.com</h5>
            <a href='mailto:janani.kumar.dev@gmail.com' target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsLinkedin/>
            <h4>Linkedin</h4>
            <h5>JananiJayakumar</h5>
            <a href='https://linkedin.com/in/janani-jayakumar121299' target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp/>
            <h4>Github</h4>
            <h5>Janani Jayakumar</h5>
            <a href='https://github.com/Janani1299' target='_blank'>Send a message</a>
          </article>

        </div>

        {/* {end of contact options} */}

        <form action=''>
          <input type='text' name='name' placeholder='Your Full name' required />
          <input type='email' name='email' placeholder='Your email ' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send a Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
