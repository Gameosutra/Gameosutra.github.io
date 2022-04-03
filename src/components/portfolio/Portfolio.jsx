import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const projectData = [
  {
    id: 1,
    image: IMG1,
    title: 'Project 1',
    gitHub: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Project 2',
    gitHub: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Project 4',
    gitHub: 'https://github.com',
    demo: 'https://dribble.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projectData.map(({
          id: key,
          image,
          title,
          gitHub,
          demo
        }) => (
          <article key={key} className='portfolio__items'>
          <div className="portfolio__item-image">
            <img src={image} alt="" />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={gitHub}className='btn'>GitHub</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio