import React from 'react'
import "./newsGeneral.css";
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import NewsCard from '../../components/NewsCard/NewsCard';

const NewsGeneral = () => {
  return (
    <div className='news_general_pg'>
         <Header />
         <Navbar />
         <div className='breaking_news_header' style={{textAlign: "center"}}>
            <h1>Breaking News</h1>
        </div>
        <div className='news_container'>
            <NewsCard />
        </div>
    </div>
  )
}

export default NewsGeneral