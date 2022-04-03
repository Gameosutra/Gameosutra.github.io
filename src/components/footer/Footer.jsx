import React from 'react'
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">Manushivam</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li> <a href="#about">About</a></li>
        <li><a href="#experience">Experiences</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#quotes">Quotes</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/manne.1402/" target="_blank" rel="noreferrer"><FaFacebookF/></a>
        <a href="https://www.instagram.com/manushivam_2174/" target="_blank" rel="noreferrer"><FiInstagram/></a>
        <a href="https://twitter.com/ManushivamM" target="_blank" rel="noreferrer"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Manushivam Maheshwari. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer