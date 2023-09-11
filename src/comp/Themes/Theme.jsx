import React from 'react';
import './style.css';
import { useParallax } from "react-scroll-parallax";
import one from '../../assets/theme1.png';
import two from '../../assets/theme2.png';
import three from '../../assets/theme3.png';
import four from '../../assets/theme4.png';
import five from '../../assets/theme5.png';
import six from '../../assets/theme6.png';
import seven from '../../assets/theme7.png';
import eight from '../../assets/theme8.png';

function Theme() {
  const head = useParallax({
    translateX: [-60, 20]
  });

  return (
    <div className='full'>
      <div className="col-md-12 text-center" ref={head.ref}>
        <h3 className="animate-character">OUR THEMES</h3>
      </div>

      <div className='half'>
        <div className='card-container'>
          <div className='sub'>
            <img src={two} alt="Theme 2" />
            <div className='para'>
              <p>AUGMENTED REALITY</p>
            </div>
          </div>
          <div className='sub'>
            <img src={three} alt="Theme 3" />
            <div className='para'>
              <p>AUGMENTED REALITY</p>
            </div>
          </div>
          <div className='sub'>
            <img src={two} alt="Theme 2" />
            <div className='para'>
              <p>AUGMENTED REALITY</p>
            </div>
          </div>
          <div className="grad4"></div>
        </div>
        <div className='card-container'>
          <div className='sub'>
            <img src={five} alt="Theme 5" />
            <div className='para'>
              <p>AUGMENTED REALITY</p>
            </div>
          </div>
          <div className='sub'>
            <img src={six} alt="Theme 6" />
            <div className='para'>
              <p>AUGMENTED REALITY</p>
            </div>
          </div>
          <div className='sub'>
            <img src={seven} alt="Theme 7" />
            <div className='para'>
              <p>AUGMENTED REALITY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Theme;
