import React, { useEffect, useState } from 'react'
import "./cricketScore.css";
import ipl from "../../assets/ipl.png"
import { SlCalender } from "react-icons/sl";
import CricketCard from '../CricketCard/CricketCard';


const CricketScore = () => {
    const [cricketScore,setCricketScore] = useState(null);
    const fetchCricketScore = async () =>{
        const response = await fetch('http://localhost:8080/cricker-score');
        const score = await response.json();
        setCricketScore(score);
    }

    useEffect(() => {
        fetchCricketScore();
    },[])

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
            {
                cricketScore && cricketScore.map((match,index) => {
                    if(index < 5){
                        return (
                            <CricketCard match={match} key={index} />
                        )
                    }
                })
            }
        </div>
    </div>
  )
}

export default CricketScore