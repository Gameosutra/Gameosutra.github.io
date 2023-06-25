import React from 'react'
import './about.css';
import ME from '../../assets/m3.jpeg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>10+ in India</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>

          <p>
          Hello! I am Manushivam Maheshwari. Currently working 
          <a href="https://coindcx.com" target='_blank' rel="noreferrer"> @Coindcx.com</a> as a Sr. Frontend Engineer.
          <br/>I have always been interested in new technologies. I am always up for innovative hardware and software solutions. 
          Challenging position with a creative work environment to enhance expertise in Frontend/Full stack Engineering.
          </p>

          <a href="#contact" className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>

    </section>
  )
}

export default About