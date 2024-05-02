import React, { useContext, useEffect, useState } from 'react'
import "./newsDetail.css";
import Header from "../../components/Header/Header";
import Navbar from '../../components/Navbar/Navbar';
import { useLocation } from 'react-router';
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { GrLike } from "react-icons/gr";
import { BiSolidLike } from "react-icons/bi";
import { AuthContext } from '../../context/AuthContext';
import axios from "axios";




const NewsDetail = () => {
  const newsData = useLocation().state.news;
  const [content,setContent] = useState("");
  const [liked,setLiked] = useState(false);
  const {currentUser} = useContext(AuthContext)


  const fetchContent = async (req,res) => {
    const response = await fetch(`https://extractorapi.com/api/v1/extractor/?apikey=8401709db44e72b3566378bd1f8a7cb4b8baf6b5&url=${newsData.url}`);
    const data = await response.json();
    setContent(data)
  }

  useEffect(() => {
    fetchContent();
  },[newsData]);

  const handleLike = async () => {
    setLiked(true);
    console.log(newsData);
    const response = await axios.put(`http://localhost:8080/like/${currentUser._id}`, {news: newsData});
    // console.log(response.data);
  }


  return (
    <div className='news_detail_page'>
      <Header />
      <Navbar />
      <div className='news_detail_container'>
        <Link to="/"><p style={{marginBottom: "20px", display: "flex", alignItems: "center", cursor: "pointer"}}><IoMdArrowBack style={{marginRight: "5px"}} /> Back </p></Link>
        <h1>{newsData.title}</h1>
        <img src={newsData.urlToImage} alt="" />
        <div style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
          <p className='news_detail_source'>Cricket.one | 30/04/2024</p>
          <div style={{display: "flex"}}>
            <p style={{color: "#777", marginRight: "20px", display: "flex", alignItems: "center", cursor: "pointer"}} onClick={handleLike}>{liked?<BiSolidLike style={{marginRight: "5px"}}/> :<GrLike style={{marginRight: "5px"}} />}Like</p>
            <a style={{textDecoration :"underline", cursor: "pointer", color: "#777"}} target='_blank' href={newsData.url}>Visit the news</a>
          </div>
        </div>
        <div className='news_detail_content'>
          <p><span style={{fontWeight: "600", fontSize: "32px"}}>{content?.text?.charAt(0)}</span>{content?.text?.slice(1)}</p>
        </div>
      </div>
    </div>
  )
}

export default NewsDetail