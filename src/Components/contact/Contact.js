import React from 'react';
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';

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
            <h5>janani1299@gmail.com</h5>
            <a href='mailto:jananijayakumar367@gmail.com' target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine/>
            <h4>Messenger</h4>
            <h5>JananiJayakumar</h5>
            <a href='https://messenger.com' target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp/>
            <h4>Email</h4>
            <h5>+9087654321</h5>
            <a href='https://api.whatsapp.com/send?phone+9080555211' target='_blank'>Send a message</a>
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
