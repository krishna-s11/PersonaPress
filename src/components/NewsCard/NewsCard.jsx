import React from 'react'
import "./newsCard.css";

const NewsCard = () => {
  return (
    <div className='news_card_holder'>
        <div className='latest_news_card'>
            <div className='latest_news_card_left'>
                <img src='' alt="" />
            </div>
            <div className='latest_news_card_right'>
                <h2>Dummu</h2>
                <p>dummy</p>
                <div className='latest_news_card_info'>
                    <p>dummy</p>
                    {/* <p><IoEye style={{marginRight:"5px"}}/>6576</p> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsCard