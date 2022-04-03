import React from 'react'
import './testimonials.css';
import AVTAR1 from '../../assets/avatar1.webp';
import AVTAR2 from '../../assets/avatar2.jpeg';
import AVTAR3 from '../../assets/avatar3.webp';
import AVTAR4 from '../../assets/avatar4.jpeg';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonialData = [
  {
    key: 4,
    image: AVTAR4,
    name: 'Swami Vivekananda',
    review: 'Talk to yourself once in a day, otherwise you may miss meeting an intelligent person in this world.'
  },
  {
    key: 3,
    image: AVTAR3,
    name: 'Albert Einstein',
    review: 'We cannot solve our problems with the same thinking we used when we created them.'
  },
  {
    key: 1,
    image: AVTAR1,
    name: 'Winston Churchill',
    review: 'Success is not final, failure is not fatal: it is the courage to continue that counts.'
  },
  {
    key: 2,
    image: AVTAR2,
    name: 'Ralph Waldo Emerson',
    review: 'What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonals'>
      <h5>Words from Famous People</h5>
      <h2>Inspiring Quotes</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
        {testimonialData.map(({
          key,
          image,
          name,
          review
        }) => (
          <SwiperSlide key={key} className="testimonial">
            <div className="client__avtar">
              <img src={image} alt="" />
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </section>
  )
}

export default Testimonials