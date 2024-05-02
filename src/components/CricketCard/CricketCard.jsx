import React from 'react'
import "./cricketCard.css"

const CricketCard = ({match}) => {
  return (
    <div className='cricket_card'>
      <p style={{color: "#777"}}>{`${match.dateTimeGMT.split("T")[0]} | ${match.dateTimeGMT.split("T")[1]}`}</p>
      <div className='match_teams'>
        <div>
          <img src={match.t1img} alt="" srcset="" />
          <p>{match.t1.split('[')[1].slice(0,-1)}</p>
        </div>
        <p>vs</p>
        <div>
          <img src={match.t2img} alt="" srcset="" />
          <p>{match.t2.split('[')[1].slice(0,-1)}</p>
        </div>
      </div>
      <h3 style={{fontWeight: "400", fontSize: "16px", textAlign: "center"}}>Match not started yet !</h3>
    </div>
  )
}

export default CricketCard