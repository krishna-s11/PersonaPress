import React from 'react'
import "./header.css";
import cloudy from "../../assets/cloudy.png";

const Header = () => {
  const date = new Date();
  const day = date.getDay();
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const currentDate = date.getDate();
  const currentMonth = month[date.getMonth()];
  const currentYear = date.getFullYear();
  return (
    <div className='header'>
        <p id="header_date">{days[day]}, {`${currentDate} ${currentMonth} ${currentYear}`}</p>
        <div>
            <p style={{marginRight: "10px"}}>Noida,</p>
            <img src={cloudy} alt="" srcset="" />
            <p>33°C</p>
        </div>
    </div>
  )
}

export default Header