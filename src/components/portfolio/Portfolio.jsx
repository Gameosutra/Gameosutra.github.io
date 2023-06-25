import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/coindcx.jpeg'
import IMG2 from '../../assets/housing.jpeg'
import IMG3 from '../../assets/classplus.png'
import IMG4 from '../../assets/supplynote.jpeg'

const projectData = [
  {
    id: 1,
    image: IMG1,
    title: `<div>India's most valued Crypto Investment App, <span><a href="https://coindcx.com" target='_blank' rel="noreferrer">Coindcx.com</a></span></div>`,
  },
  {
    id: 2,
    image: IMG2,
    title: `<div>India's most trusted Real Estate Platform, <span><a href="https://housing.com" target='_blank' rel="noreferrer">Housing.com</a></span></div>`,
  },
  {
    id: 3,
    image: IMG3,
    title: `<div>Become the favourite online educator of students across India, <span><a href="https://classplusapp.com" target='_blank' rel="noreferrer">Classplus.com</a></span></div>`,
  },
  {
    id: 4,
    image: IMG4,
    title: `<div>Cloud based procurement management suite which automates supply chain, <span><a href="https://supplynote.in" target='_blank' rel="noreferrer">Classplus.com</a></span></div>`,
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Existing Companies</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projectData.map(({
          id: key,
          image,
          title,
        }) => (
          <article key={key} className='portfolio__items'>
            <div className="portfolio__item-image">
              <img src={image} alt="" />
            </div>
            <h3 className="portfolio__item-title" dangerouslySetInnerHTML={{ __html: title }}></h3>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio