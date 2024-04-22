import React from 'react'
import "./latestNews.css";
import women_gym from "../../assets/sven-mieke-optBC2FxCfc-unsplash.jpg";
import icehockey from "../../assets/markus-spiske-AeUZfT1uzpo-unsplash.jpg";
import football from "../../assets/jeffrey-f-lin-QV47mIeSm64-unsplash.jpg";
import { IoEye } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";



const LatestNews = () => {
  return (
    <div className='latest_news'>
        <div className='latest_news_header'>
            <h1 style={{display: "flex",alignItems: "center"}}>Latest News <MdKeyboardArrowRight style={{color: "#3e7320", fontSize: "60px", fontWeight: "600", marginLeft: "10px"}}/></h1>
        </div>
        <div className='latest_news_container'>
            <div className='latest_news_left'>
                <div className='latest_news_card'>
                    <div className='latest_news_card_left'>
                        <img src={women_gym} alt="" />
                    </div>
                    <div className='latest_news_card_right'>
                        <h2>Keep Fit to Avoid Heart Rhythm Disorder and Stroke, Study Suggests</h2>
                        <p>The study of more than 15,000 people found that physical fitness is linked with a lower likelihood of developing both conditions.</p>
                        <div className='latest_news_card_info'>
                            <p>Fitness | 21/04/2024</p>
                            <p><IoEye style={{marginRight:"5px"}}/>6576</p>
                        </div>
                    </div>
                </div>
                <div className='latest_news_card'>
                    <div className='latest_news_card_left'>
                        <img src={icehockey} alt="" />
                    </div>
                    <div className='latest_news_card_right'>
                        <h2>DeBrusk Hopes to Re-sign with Bruins, Eyes 30-Goal Mark This Season</h2>
                        <p>A year away from hitting unrestricted free agency next summer, Boston Bruins winger Jake DeBrusk said Tuesday he is hoping to sign an extension to stay.</p>
                        <div className='latest_news_card_info'>
                            <p>Hockey | 21/04/2024</p>
                            <p><IoEye style={{marginRight:"5px"}}/>2371</p>
                        </div>
                    </div>
                </div>
                <div className='latest_news_card'>
                    <div className='latest_news_card_left'>
                        <img src={football} alt="" />
                    </div>
                    <div className='latest_news_card_right'>
                        <h2>Canada Men’s Soccer Training Session Scrapped Amid Compensation talks</h2>
                        <p>A planned training sessions for Canada’s men’s soccer team was scrapped Friday amid ongoing discussions about player compensation.</p>
                        <div className='latest_news_card_info'>
                            <p>Football | 21/04/2024</p>
                            <p><IoEye style={{marginRight:"5px"}}/>8497</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='latest_news_right'>

            </div>
        </div>
    </div>
  )
}

export default LatestNews