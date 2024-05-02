import React, { useContext, useEffect, useState } from 'react'
import "./newsGeneral.css";
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import NewsCard from '../../components/NewsCard/NewsCard';
import { useLocation, useParams } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const NewsGeneral = () => {
    
    const {category} = useParams();
    const location = useLocation();
    const [news,setNews] = useState();
    const {currentUser} = useContext(AuthContext);

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
                !(category === 'national' || category === 'current' || category === 'business')  &&  <h1>{category?category.charAt(0).toUpperCase() + category?.slice(1):'Your'} {category?'News': 'Feed'}</h1>
            }
        </div>
        <div className='news_container'>
            {
                location.pathname.includes('feed')?
                    <NewsCard userNews={currentUser?.news}/>
                :
                    <NewsCard />

            }
        </div>
    </div>
  )
}

export default NewsGeneral