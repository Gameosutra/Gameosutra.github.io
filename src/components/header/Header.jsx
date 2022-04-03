import React from 'react'
import './header.css';
import CTA from './CTA';
import ME from '../../assets/m6.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
   <header>
     <div className="container header__container">
       <h5>Hello I'm</h5>
       <h1>Manushivam</h1>
       <h5 className="text-light">Fullstack Developer</h5>
      <CTA />
      <HeaderSocials />
      <div className="me">
        <img src={ME} alt="" className='me__image' />
      </div>
      <a href="#contact" className='scroll__down'>Scroll Down</a>
     </div>
   </header>
  )
}

export default Header