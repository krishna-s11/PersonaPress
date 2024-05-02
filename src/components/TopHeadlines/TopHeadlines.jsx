import React, { useEffect, useState } from 'react'
import "./topHeadlines.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import gym from "../../assets/cathy-pham-3jAN9InapQI-unsplash.jpg"
import prix from "../../assets/brian-mccall-QhiA6DdlgiM-unsplash.jpg";
import { Link } from 'react-router-dom';

const TopHeadlines = () => {
  const [breakingNews,setBreakingNews] = useState(null);
  const [breaking,setBreaking] = useState(null);

  const fetchNews = async () => {
      const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=04e73461caf044a29c27703c5a023fde");
      const news = await response.json();
      setBreaking(news.articles[0]);
      setBreakingNews(news.articles.splice(16));
  }
  
  useEffect(() => {
      fetchNews();
  },[]);

  return (
    <div className='topheadline_section'>
      <h1>World News <MdKeyboardArrowRight style={{color: "#3e7320", fontSize: "60px", fontWeight: "600", marginLeft: "10px"}}/></h1>
      {
        breakingNews && 
          <div className='topheadline_main'>
            <img src={breakingNews[0].urlToImage} alt="" srcset="" />
            <Link to={'/news'} state={{news: breakingNews[0]}}><h3 class='news_card_title'>{breakingNews[0].title}</h3></Link>
          </div>

      }
      <div className='topheadline_secondary'>
          {
            breakingNews && 
                <div className='topheadline_card'>
                  <img src={breakingNews[1].urlToImage} alt="" srcset="" />
                  <div className='topheadline_card_right'>
                    <Link to={'/news'} state={{news: breakingNews[1]}}><p class='news_card_title'>{breakingNews[1].title}</p></Link>
                    <div className='topheadline_card_subtitle'>
                      <p id='subtitle'>{breakingNews[1].source.name} | {breakingNews[1].publishedAt.split('T')[0]}</p>
                    </div>
                  </div>
                </div>
          }
          {
            breakingNews && 
                <div className='topheadline_card'>
                  <img src={breakingNews[2].urlToImage} alt="" srcset="" />
                  <div className='topheadline_card_right'>
                  <Link to={'/news'} state={{news: breakingNews[2]}}><p class='news_card_title'>{breakingNews[2].title}</p></Link>
                    <div className='topheadline_card_subtitle'>
                      <p id='subtitle'>{breakingNews[2].source.name} | {breakingNews[2].publishedAt.split('T')[0]}</p>
                    </div>
                  </div>
                </div>
          }
      </div>
    </div>
  )
}

export default TopHeadlines