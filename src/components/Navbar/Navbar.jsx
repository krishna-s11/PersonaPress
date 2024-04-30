import React from 'react'
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/news/sports"><li>Sports</li></Link>
            <Link to="/news/technology"><li>Technology</li></Link>
            <Link to="/news/national"><li>National</li></Link>
            <Link to="/news/cuurentaffairs"><li>Current Affairs</li></Link>
            <Link to="/news/entertainment"><li>Entertainment</li></Link>
            <Link to="/news/finance"><li>Finance</li></Link>
            <Link to="/news/politics"><li>Politics</li></Link>
        </ul>
    </div>
  )
}

export default Navbar