import React, { useState } from 'react';
import './carousel.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import bird11 from '../../imgs/bird_images/11.png';
import bird12 from '../../imgs/bird_images/12.png';
import bird13 from '../../imgs/bird_images/13.png';
import bird14 from '../../imgs/bird_images/14.png';
import bird15 from '../../imgs/bird_images/15.png';
import bird16 from '../../imgs/bird_images/16.png';
import bird17 from '../../imgs/bird_images/17.png';
import bird18 from '../../imgs/bird_images/18.png';
import bird19 from '../../imgs/bird_images/19.png';
import bird20 from '../../imgs/bird_images/20.png';

const Carousel = () => {
  const slides = [
    bird11,
    bird12,
    bird13,
    bird14,
    bird15,
    bird16,
    bird17,
    bird18,
    bird19,
    bird20,
  ];

  const [current, setCurrent] = useState(0);
  const [pace, setPace] = useState(true)
  const length = slides.length;

  // Check for Array in case of Error
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const carouselTimer = pace ? setTimeout(() => nextSlide(), 1800) : null

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const nextSlideClick = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setPace(false)
  };

  const prevSlideClick = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    setPace(false)
  };

  return (
    <div className="carousel-container">
      {slides.map((slide, index) => (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
        >
          {index === current && <img src={slide} alt="" className="image" />}
        </div>
      ))}
      <div className="arrows-container">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlideClick} />
        <FaArrowAltCircleRight
          className="right-arrow"
          onClick={nextSlideClick}
        />
      </div>
    </div>
  );
};

export default Carousel;
