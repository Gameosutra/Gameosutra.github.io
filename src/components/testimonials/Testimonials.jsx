import React from 'react'
import './testimonials.css';
import AVTAR1 from '../../assets/avatar1.jpg';
import AVTAR2 from '../../assets/avatar2.jpg';
import AVTAR3 from '../../assets/avatar3.jpg';
import AVTAR4 from '../../assets/avatar4.jpg';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonialData = [
  {
    key: 1,
    image: AVTAR1,
    name: 'Sarthak',
    review: 'Hello wowwoHello wowwoHello wowwoHello wowwoHello wowwoHello wowwoHello wowwoHello wowwoHello wowwoHello wowwoHello wowwo'
  },
  {
    key: 2,
    image: AVTAR2,
    name: 'Sarthak',
    review: 'Hello wowwoHello wowwoHello wowwoHello wowwoHello wowwoHello wowwoHello wowwoHello wowwoHello wowwoHello wowwoHello wowwo'
  },
  {
    key: 3,
    image: AVTAR3,
    name: 'Sarthak',
    review: 'Hello wowwoHello wowwoHello wowwoHello wowwoHello wowwoHello wowwoHello wowwoHello wowwoHello wowwoHello wowwoHello wowwo'
  },
  {
    key: 4,
    image: AVTAR4,
    name: 'Sarthak',
    review: 'Hello wowwoHello wowwoHello wowwoHello wowwoHello wowwoHello wowwoHello wowwoHello wowwoHello wowwoHello wowwoHello wowwo'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonals'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
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