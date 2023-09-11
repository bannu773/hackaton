import React from 'react';
import './style.css';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import { AiFillLinkedin } from 'react-icons/ai';

function Footer_part() {
    const iconStyle = {
        fontSize: '20px', 
        cursor:'pointer'
      };

  return (
    <div className='footer'>
      <div className="foot">
      <div className='section'>
        <p>STAY UP TO DATE WITH OUR NEWS AND NOTIFICATIONS</p>
      </div>
      <div className='section'>
        <i style={iconStyle}><BsFacebook /></i>
        <i style={iconStyle}><AiFillLinkedin /></i>
        <i style={iconStyle}><RiInstagramFill /></i>
        <i style={iconStyle}><BsTwitter /></i>
      </div>
        <p>© UHACKATHON 4.0 | ALL RIGHTS RESERVED</p>
        <i style={iconStyle}>Terms & Conditions</i>
        </div>
    </div>
  );
}

export default Footer_part;
