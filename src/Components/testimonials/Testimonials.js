import React from 'react';
import './Testimonials.css';
import AVTR1 from '../../assets/images/girl.jpg';
// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
    {
        avatar:AVTR1,
        name:'Winston Churchill',
        review:'Success is not final, failure is not fatal: it is the courage to continue that counts.'
    },
    {
        avatar:AVTR1,
        name:'Winston Churchill',
        review:'Success is not final, failure is not fatal: it is the courage to continue that counts.'
    },
    {
        avatar:AVTR1,
        name:'Winston Churchill',
        review:'Success is not final, failure is not fatal: it is the courage to continue that counts.'
    },
    {
        avatar:AVTR1,
        name:'Winston Churchill',
        review:'Success is not final, failure is not fatal: it is the courage to continue that counts.'
    },
]

function Testimonials() {
  return (
    <section id='testimonails'>
        <h5>Review</h5>
        <h2>Testimonials</h2>

        <Swiper className='container testimonials__container' 
            modules={[ Pagination, ]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
        >
            {
                data.map(({avatar, name, review}, index) => {
                    return (
                        <SwiperSlide key={index} className='testimonial'>
                            <div className='client__avatar'>
                                <img src={avatar} alt= 'profile'/>
                            </div>
                            <h5 className='client__name'>{name}</h5>
                            <small className='client__review'>{review}</small>
                        </SwiperSlide>
                    )
                })
            }
        


            {/* <article className='testimonial'>
                <div className='client__avatar'>
                    <img src={AVTR1} alt= 'profile'/>
                </div>
                <h5 className='client__name'>Winston Churchill</h5>
                <small className='client__review'>
                    Success is not final, failure is not fatal: it is the courage to continue that counts.
                </small>
            </article>

            <article className='testimonial'>
                <div className='client__avatar'>
                    <img src={AVTR1} alt= 'profile'/>
                </div>
                <h5 className='client__name'>Winston Churchill</h5>
                <small className='client__review'>
                    Success is not final, failure is not fatal: it is the courage to continue that counts.
                </small>
            </article>

            <article className='testimonial'>
                <div className='client__avatar'>
                    <img src={AVTR1} alt= 'profile'/>
                </div>
                <h5 className='client__name'>Winston Churchill</h5>
                <small className='client__review'>
                    Success is not final, failure is not fatal: it is the courage to continue that counts.
                </small>
            </article>

            <article className='testimonial'>
                <div className='client__avatar'>
                    <img src={AVTR1} alt= 'profile'/>
                </div>
                <h5 className='client__name'>Winston Churchill</h5>
                <small className='client__review'>
                    Success is not final, failure is not fatal: it is the courage to continue that counts.
                </small>
            </article> */}

            

        </Swiper>
    </section>
  )
}

export default Testimonials
