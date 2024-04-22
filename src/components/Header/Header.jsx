import React from 'react'
import "./header.css";
import cloudy from "../../assets/cloudy.png";

const Header = () => {
  return (
    <div className='header'>
        <p id="header_date">Saturday, 20 Apr 2024</p>
        <div>
            <p style={{marginRight: "10px"}}>Noida,</p>
            <img src={cloudy} alt="" srcset="" />
            <p>33°C</p>
        </div>
    </div>
  )
}

export default Header