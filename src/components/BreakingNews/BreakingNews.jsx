import React, { useEffect, useState } from 'react'
import "./breakingNews.css";
import cycle_race from "../../assets/markus-spiske-WUehAgqO5hE-unsplash.jpg";
import beach_volly from "../../assets/miguel-teirlinck-VDkRsT649C0-unsplash.jpg";
import women_box from "../../assets/markus-spiske-WUehAgqO5hE-unsplash.jpg";


const BreakingNews = () => {

  const [breakingNews,setBreakingNews] = useState(null);
  const [breaking,setBreaking] = useState(null);

  const fetchNews = async () => {
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=04e73461caf044a29c27703c5a023fde");
    const news = await response.json();
    setBreaking(news.articles[0]);
    setBreakingNews(news.articles.splice(16));
  }
  
  useEffect(() => {
    fetchNews();
  },[]);



  return (
    <div className='breaking_news'>
        <div className='breaking_news_header'>
            <h1>Breaking News</h1>
        </div>
        {
          breaking && 
            <div className='breaking_news_container'>
              <img src={breaking.urlToImage} style={{width: "100%", height: "600px"}} alt="" />
                <div className='breaking_news_text'>
                    <p><span style={{color: "red", marginRight: "10px"}}>Breaking News:</span>{breaking.title}</p>
                </div>
            </div>
        }
        <div className='breaking_subnews'>
          {
            breakingNews && breakingNews.splice(1).map((news,index) => {
              return (
                <div className='breaking_subnews_card'>
                  <div className='breaking_subnews_left'>
                    <img src={news.urlToImage} alt="" srcset="" />
                  </div>
                  <div className='breaking_subnews_right'>
                    <p className='subnews_headline'>{news.title}</p>
                    <p className='subnews_subline'>{news.description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default BreakingNews