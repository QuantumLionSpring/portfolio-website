import React from "react";
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const Testimonials = () =>{
    return(
        <section id='testimonials' style={{height:"70vh"}}>testimonials
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>
        <Swiper className="testimonials__container container">

            <SwiperSlide>
            <article className="testimonial">
                <div className="client__avatar">
             <img src={AVTR1} alt="avatar-1"/>

                </div>
                <h5 className='client__name'>Ernest Achiever</h5>
                <small className='client__review'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi delectus,
                    distinctio doloribus eos est ex fuga
                    fugiat harum obcaecati odit officia perspiciatis provident quidem rem saepe sunt veniam voluptas?</small>
            </article> </SwiperSlide>
            <SwiperSlide>
            <article className="testimonial">
                <div className="client__avatar">
                    <img src={AVTR2} alt="avatar-2"/>

                </div>
                <h5 className='client__name'>Ernest Achiever</h5>
                <small className='client__review'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi delectus,
                    distinctio doloribus eos est ex fuga
                    fugiat harum obcaecati odit officia perspiciatis provident quidem rem saepe sunt veniam voluptas?</small>
            </article> </SwiperSlide>
            <SwiperSlide>
            <article className="testimonial">
                <div className="client__avatar">
                    <img src={AVTR3} alt="avatar-3"/>
                </div>
                <h5 className='client__name'>Ernest Achiever</h5>
                <small className='client__review'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi delectus,
                    distinctio doloribus eos est ex fuga
                    fugiat harum obcaecati odit officia perspiciatis provident quidem rem saepe sunt veniam voluptas?</small>
            </article> </SwiperSlide>
         <SwiperSlide>
            <article className="testimonial">
                <div className="client__avatar">
                    <img src={AVTR4} alt="avatar-4"/>
                </div>
                <h5 className='client__name'>Ernest Achiever</h5>
                <small className='client__review'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi delectus,
                    distinctio doloribus eos est ex fuga
                    fugiat harum obcaecati odit officia perspiciatis provident quidem rem saepe sunt veniam voluptas?</small>
            </article></SwiperSlide>




        </Swiper>


        </section>

    )
}
export default Testimonials