import React from 'react';
import './footer.css';
// import { FaFacebookF } from 'react-icons/fa';
// import { FaInstagram } from 'react-icons/fa';
// import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer__logo'>
        Hema priya
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#skill'>Skill</a>
        </li>
        <li>
          <a href='#qualification'>Qualification</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      {/* <div className='footer__socials'>
        <a href='https://facebook.com'>
          <FaFacebookF />
        </a>
        <a href='https://instagram.com'>
          <FaInstagram />
        </a>
        <a href='https://twitter.com'>
          <IoLogoTwitter />
        </a>
      </div> */}

      <div className='footer__copyright'>
        <small>&copy; Hema priya. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
