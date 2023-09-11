import React from 'react';
import './style.css';
import one from '../../assets/theme1.png';
import two from '../../assets/theme2.png';
import three from '../../assets/theme3.png';

function Sponsers() {
  return (
    <div className='sponser'>
      <div className="col-md-12 text-center">
        <h3 className="animate-character1">SPONSORS</h3>
      </div>
      <div className="sponsors-cont">
        <div className="sponsor-card">
          <img src={one} alt="Sponsor 1" className="sponsor-image" />
        </div>
        <div className="sponsor-card">
          <img src={two} alt="Sponsor 2" className="sponsor-image" />
        </div>
        <div className="sponsor-card">
          <img src={three} alt="Sponsor 3" className="sponsor-image" />
        </div>
      </div>
    </div>
  );
}

export default Sponsers;
