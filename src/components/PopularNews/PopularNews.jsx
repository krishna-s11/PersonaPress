import React, { useEffect, useState } from 'react'
import "./popularNews.css";
import TopHeadlines from '../TopHeadlines/TopHeadlines';
import rugby from "../../assets/quino-al-XAlKHW9ierw-unsplash.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import basketball from "../../assets/markus-spiske-BfphcCvhl6E-unsplash.jpg";
import usa from "../../assets/ben-o-bro-wpU4veNGnHg-unsplash.jpg";

const PopularNews = () => {
    const [breakingNews,setBreakingNews] = useState(null);
    const [breaking,setBreaking] = useState(null);

    const fetchNews = async () => {
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=04e73461caf044a29c27703c5a023fde");
        const news = await response.json();
        setBreaking(news.articles[0]);
        setBreakingNews(news.articles.splice(16));
    }
    
    useEffect(() => {
        fetchNews();
    },[]);

    console.log(breakingNews);
  return (
    <div className='popular_pg'>
        <div className='popular_news'>
            <h1>Business News <MdKeyboardArrowRight style={{color: "#3e7320", fontSize: "60px", fontWeight: "600", marginLeft: "10px"}}/></h1>
            {
              breakingNews && (
                <>
                <div className='popular_main'>
                  <div className='popular_main_left'>
                    <h2>{breakingNews[0].title}</h2>
                    <p>{breakingNews[0].description}</p>
                  </div>
                  <div className='popular_main_right'>
                    <img src={breakingNews[0].urlToImage} alt="" srcset="" />
                  </div>
                </div>
              <p style={{color: "#777"}}>{breakingNews[0].source.name} | {breakingNews[0].publishedAt.split("T")[0]}</p>
              </>
              )
            }
            <div className='popular_secondary'>
              {
                breakingNews && 
                  <div className='popular_secondary_card'>
                    <img src={breakingNews[1].urlToImage} alt="" srcset="" />
                    <h3>{breakingNews[1].title}</h3>
                    <p className='popular_subtitle'>{breakingNews[1].source.name} | {breakingNews[1].publishedAt.split("T")[0]}</p>
                  </div>
              }
              {
                breakingNews && 
                  <div className='popular_secondary_card'>
                    <img src={breakingNews[2].urlToImage} alt="" srcset="" />
                    <h3>{breakingNews[2].title}</h3>
                    <p className='popular_subtitle'>{breakingNews[2].source.name} | {breakingNews[2].publishedAt.split("T")[0]}</p>
                  </div>
              }
            </div>
        </div>
    </div>
  )
}

export default PopularNews