import React from 'react'
import '../styles/testimonial.css'

import Slider from 'react-slick'

import ava01 from '../../images/ava-1.jpg'



const Testimonial = () => {
  return (
    <section>
        <div className="container">
            <div className="slider__content-top">
                <h6 className="subtitle">Testimonials</h6>
                <h2>Trusted by more than <span className="highlight">5000 customers</span></h2>
            </div>

            <div className="slider__wrapper">
                <Slider>
                    <div className="slider__item">
                        <p className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ad voluptatum esse quas. Quod alias, temporibus consectetur earum dolor, tempore impedit a, laborum perspiciatis corporis hic odio officia minima corrupti?
                        </p>

                        <div className="customer__details">
                            <div className="customer__img">
                                <img src={ava01} alt="" />
                            </div>
                            
                            <div>
                                <h5 className="customer__name">Jonny Dahn</h5>
                                <p className="description">
                                    CEO, Workcreation
                                </p>
                            </div>
                        </div>
                     </div>
                </Slider>
            </div>
            </div>
    </section>
  )
}

export default Testimonial