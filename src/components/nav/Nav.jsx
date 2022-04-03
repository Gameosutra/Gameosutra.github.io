import React, { useState } from 'react'
import './nav.css';
import {
  AiOutlineHome,
  AiOutlineUser
} from 'react-icons/ai'
import {
  BiBook,
  BiMessageSquareDetail
} from 'react-icons/bi'
import {
  RiServiceLine
} from 'react-icons/ri'


const Nav = () => {
  const [activeNow, setActiveNow] = useState("#");

  const returnValue = (val) => activeNow === val ? 'active' : '';


  return (
    <nav>
      <a href="#" className={returnValue("#")} onClick={() => setActiveNow('#')}><AiOutlineHome /></a>
      <a href="#about" className={returnValue("about")} onClick={() => setActiveNow('about')}><AiOutlineUser /></a>
      <a href="#experience" className={returnValue("experience")} onClick={() => setActiveNow('experience')}><BiBook /></a>
      <a href="#testimonals" className={returnValue("testimonals")} onClick={() => setActiveNow('testimonals')}><RiServiceLine /></a>
      <a href="#contact" className={returnValue("contact")} onClick={() => setActiveNow('contact')}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav