import React, { useState } from 'react';
import './style.css';
import { useParallax } from "react-scroll-parallax";

function Cguests() {
    const head=useParallax({
        translateX:[-30, 20]
      })
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
 

  return (
    <div className='chief'>
    <div className="col-md-12 text-center" ref={head.ref}>
            <h3 class="animate-charcter"> CHIEF GUESTS</h3>
        </div>
    <div className="cont">
        
      {/* Card 1 */}
      <div
        className={`card ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="slide slide1">
          <div className="content">
            <div className="icon">
              <img className='im' src="/path/to/image1.jpg" />
            </div>
          </div>
        </div>
        <div className="slide slide2">
          <div className="content">
            <h3>Card 1 Title</h3>
            <p>Card 1 Description</p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className={`card ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="slide slide1">
          <div className="content">
            <div className="icon">
              <img src="/path/to/image2.jpg" />
            </div>
          </div>
        </div>
        <div className="slide slide2">
          <div className="content">
            <h3>Card 2 Title</h3>
            <p>Card 2 Description</p>
          </div>
        </div>
      </div>

       {/* card3 */}
      <div
        className={`card ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="slide slide1">
          <div className="content">
            <div className="icon">
              <img className='im' src="/path/to/image1.jpg"  />
            </div>
          </div>
        </div>
        <div className="slide slide2">
          <div className="content">
            <h3>Card 1 Title</h3>
            <p>Card 1 Description</p>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div
        className={`card ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="slide slide1">
          <div className="content">
            <div className="icon">
              <img src="/path/to/image3.jpg"  />
            </div>
          </div>
        </div>
        <div className="slide slide2">
          <div className="content">
            <h3>Card 3 Title</h3>
            <p>Card 3 Description</p>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
}

export default Cguests;
