import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.jpeg'

const projectData = [
  {
    id: 1,
    image: IMG1,
    title: 'Advance SCSS Webpage',
    gitHub: 'https://github.com/Gameosutra/advance-css-website',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Push Notification via Firebase Integration',
    gitHub: 'https://github.com/Gameosutra/push-notification'
  },
  {
    id: 3,
    image: IMG3,
    title: 'WhatsApp using React-Native',
    gitHub: 'https://github.com/Gameosutra/Whatsapp-react-native'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Twitter Tweet Analysis (Machine Learning)',
    gitHub: 'https://github.com/Gameosutra/Tweets-Analysis'
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
          gitHub
        }) => (
          <article key={key} className='portfolio__items'>
          <div className="portfolio__item-image">
            <img src={image} alt="" />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            {/* <a href={gitHub}className='btn'>GitHub</a> */}
            <a href={gitHub} className='btn btn-primary' target='_blank' rel="noreferrer">GitHub</a>
          </div>
        </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio