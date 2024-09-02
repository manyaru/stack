import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.jpg';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Discover the Latest in Fashion</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Fresh</p>
            <img src={hand_icon} alt="New arrivals" />
          </div>
          <p>Handpicked Collections</p>
          <p>For Every Style</p>
        </div>
        <div className="hero-latest-btn">
          <div>Explore Our Newest Line</div>
          <img src={arrow_icon} alt="Explore" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="Fashion showcase" />
      </div>
    </div>
  );
};
export default Hero;
