import React, { useEffect, useState } from 'react'
import "./newsCard.css";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const NewsCard = ({userNews}) => {

  const {category} = useParams();
  const [news,setNews] = useState(null);

  const fetchNews = async () =>{
    let url;
    if(category === 'national'){
        url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=04e73461caf044a29c27703c5a023fde';
    }
    else if(category === 'international'){
        url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=04e73461caf044a29c27703c5a023fde';
    }
    else{
        url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=04e73461caf044a29c27703c5a023fde`;
    }
    const response = await fetch(url);
    const news = await response.json();
    setNews(news.articles);
  }

  useEffect(() => {
    fetchNews();
  },[category])

  if(!userNews){
  return (
    <div className='news_card_holder'>
        {
            news && news.map(news => (
                <div className='latest_news_card'>
                <div className='latest_news_card_left'>
                    <img src={news.urlToImage} alt="" />
                </div>
                <div className='latest_news_card_right'>
                    <Link to={'/news'} state={{news: news}}><h2 class='news_card_title'>{news.title}</h2></Link>
                    <p>{news.description}</p>
                    <div className='latest_news_card_info'>
                        <p>{news.source.name}</p>
                        <p>{news.publishedAt.split('T')[0]}</p>
                    </div>
                </div>
            </div>
            ))
        }
    </div>
  )
}
else{
  return (
    <div className='news_card_holder'>
    {
        userNews && userNews.map(news => (
            <div className='latest_news_card'>
            <div className='latest_news_card_left'>
                <img src={news.urlToImage} alt="" />
            </div>
            <div className='latest_news_card_right'>
                <Link to={'/news'} state={{news: news}}><h2 class='news_card_title'>{news.title}</h2></Link>
                <p>{news.description}</p>
                <div className='latest_news_card_info'>
                    <p>{news.source.name}</p>
                    <p>{news.publishedAt.split('T')[0]}</p>
                </div>
            </div>
        </div>
        ))
    }
</div>
  )
}
}

export default NewsCard