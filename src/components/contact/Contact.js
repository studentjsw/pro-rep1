// import React from 'react'
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md"
import { SiWhatsapp } from "react-icons/si"
// import {BiMessageRoundedDots} from "react-icons/bi"
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_axx03sw', 'template_zjbmybr', form.current, '03nZMgwJn6V-9pPHd')

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon' />
            <h4>Email</h4>
            <h5>hema47173@gmail.com</h5>
            <a href='mailto:hema47173@gmail.com' target='_blank' rel="noreferrer">Send a Message</a>
          </article>
          <article className='contact__option'>
            <SiWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>8667025771</h5>
            <a href='https://api.whatsapp.com/send?phone=+918667025771&text=Hello,hema connect with you' target='_blank' rel="noreferrer">Send a Message</a>
          </article>
          {/* <article className='contact__option'>
                    <BiMessageRoundedDots className='contact__option-icon'/>
                    <h4>Messanger</h4>
                    <h5>Jeeva</h5>
                    <a href='https://m.me/profile.php?id=100012057132521' target='_blank' rel="noreferrer">Send a Message</a>
                  </article> */}
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section >
  )
}

export default Contact