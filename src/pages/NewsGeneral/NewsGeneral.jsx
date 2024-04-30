import React from 'react'
import "./newsGeneral.css";
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import NewsCard from '../../components/NewsCard/NewsCard';
import { useParams } from 'react-router';

const NewsGeneral = () => {
    
    const {category} = useParams();

  return (
    <div className='news_general_pg'>
         <Header />
         <Navbar />
         <div className='breaking_news_header' style={{textAlign: "center"}}>
            {
                category === 'national' && <h1>National News</h1> 
            }
            {
                category === 'current' && <h1>Current Affairs</h1>
            }
            {
                category === 'business' && <h1>Finance News</h1> 
            }
            {
                category !== 'national' || category !== 'current' || category !== 'business'  &&  <h1>{category.charAt(0).toUpperCase() + category.slice(1)} News</h1>
            }
        </div>
        <div className='news_container'>
            <NewsCard />
        </div>
    </div>
  )
}

export default NewsGeneral