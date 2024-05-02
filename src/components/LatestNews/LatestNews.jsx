import React, { useEffect, useState } from 'react'
import "./latestNews.css";
import women_gym from "../../assets/sven-mieke-optBC2FxCfc-unsplash.jpg";
import icehockey from "../../assets/markus-spiske-AeUZfT1uzpo-unsplash.jpg";
import football from "../../assets/jeffrey-f-lin-QV47mIeSm64-unsplash.jpg";
import { IoEye } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';



const LatestNews = () => {
    const [breakingNews,setBreakingNews] = useState(null);
    const [breaking,setBreaking] = useState(null);

    const fetchNews = async () => {
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=04e73461caf044a29c27703c5a023fde");
        const news = await response.json();
        setBreaking(news.articles[0]);
        setBreakingNews(news.articles.splice(16));
    }
    
    useEffect(() => {
        fetchNews();
    },[]);

  return (
    <div className='latest_news'>
        <div className='latest_news_header'>
            <h1 style={{display: "flex",alignItems: "center"}}>Sports News <MdKeyboardArrowRight style={{color: "#3e7320", fontSize: "60px", fontWeight: "600", marginLeft: "10px"}}/></h1>
        </div>
        <div className='latest_news_container'>
            <div className='latest_news_left'>
                {
                    breakingNews && breakingNews.map((news,index) => {
                        return (
                            <div className='latest_news_card'>
                                <div className='latest_news_card_left'>
                                    <img src={news.urlToImage} alt="" />
                                </div>
                                <div className='latest_news_card_right'>
                                    <Link to={'/news'} state={{news: news}}><h2 class='news_card_title'>{news.title}</h2></Link>
                                    <p>{news.description}</p>
                                    <div className='latest_news_card_info'>
                                        <p>{news.source.name} | {news.publishedAt.split('T')[0]}</p>
                                        <p><IoEye style={{marginRight:"5px"}}/>6576</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='latest_news_right'>

            </div>
        </div>
    </div>
  )
}

export default LatestNews