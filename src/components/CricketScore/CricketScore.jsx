import React from 'react'
import "./cricketScore.css";
import ipl from "../../assets/ipl.png"
import { SlCalender } from "react-icons/sl";
import CricketCard from '../CricketCard/CricketCard';


const CricketScore = () => {
  return (
    <div className='cricket_score'>
        <div className='cricket_score_header'>
            <div className='ipl'>
                <img src={ipl} alt="" srcset="" />
                <p>Indian Premier League</p>
            </div>
            <div className='ipl_day'>
                <SlCalender style={{marginRight: "10px"}}/>
                <p>Today</p>
            </div>
        </div>
        <div className='cricket_scores_container'>
            <CricketCard />
            <CricketCard />
            <CricketCard />
            <CricketCard />
            <CricketCard />
        </div>
    </div>
  )
}

export default CricketScore