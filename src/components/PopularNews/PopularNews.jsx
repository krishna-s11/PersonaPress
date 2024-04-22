import React from 'react'
import "./popularNews.css";
import TopHeadlines from '../TopHeadlines/TopHeadlines';

const PopularNews = () => {
  return (
    <div className='popular_pg'>
        <div className='popular_news'>
            <h1>Popular News</h1>
        </div>
        <TopHeadlines />
    </div>
  )
}

export default PopularNews