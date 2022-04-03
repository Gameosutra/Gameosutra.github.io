import React, { useRef } from 'react';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ioyqh48', 'template_9c7dq74', form.current, 'iz70e1LTGSpGFQaXD');
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <div className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>harindermaheshwari@gmail.com</h5>
            <a href="mailto:harindermaheshwari@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </div>
          <div className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Twitter</h4>
            <h5>Manushivam</h5>
            <a href="https://twitter.com/messages/compose?recipient_id=1079299864750669824" target='_blank' rel="noreferrer">Send a message</a>
          </div>
          <div className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91-9988479897</h5>
            <a href="https://api.whatsapp.com/send?phone=+919988479897" target='_blank' rel="noreferrer">Send a message</a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" row='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact