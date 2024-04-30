import React from 'react'
import "./homepage.css"
import Header from '../../components/Header/Header'
import { IoMdMail } from "react-icons/io";
import Navbar from '../../components/Navbar/Navbar';
import CricketScore from '../../components/CricketScore/CricketScore';
import BreakingNews from '../../components/BreakingNews/BreakingNews';
import LatestNews from '../../components/LatestNews/LatestNews';
import PopularNews from '../../components/PopularNews/PopularNews';
import TopHeadlines from '../../components/TopHeadlines/TopHeadlines';
import Subscribe from '../../components/Subscribe/Subscribe';
import footer from "../../assets/footer.png";


const Homepage = () => {
  return (
    <div>
        <Header />
        <div className='title_header'>
            <h1><span style={{color: "#3e7320"}}>Persona</span>Press</h1>
            <div>
                <button><IoMdMail style={{marginRight: "3px"}}/>Subscribe</button>
                <button>Login</button>
            </div>
        </div>
        <Navbar />
        <CricketScore/>
        <BreakingNews />
        <LatestNews />
        <div style={{display: "flex", justifyContent: "space-between", margin: "50px 20px"}}>
          <PopularNews />
          <TopHeadlines />
        </div>
        {/* <Subscribe /> */}
        <img src={footer} alt="" />
    </div>
  )
}

export default Homepage