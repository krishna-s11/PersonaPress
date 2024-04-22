import React from 'react'
import "./breakingNews.css";
import cycle_race from "../../assets/markus-spiske-WUehAgqO5hE-unsplash.jpg";
import beach_volly from "../../assets/miguel-teirlinck-VDkRsT649C0-unsplash.jpg";
import women_box from "../../assets/markus-spiske-WUehAgqO5hE-unsplash.jpg";


const BreakingNews = () => {
  return (
    <div className='breaking_news'>
        <div className='breaking_news_header'>
            <h1>Breaking News</h1>
        </div>
        <div className='breaking_news_container'>
            <div className='breaking_news_text'>
                <p><span style={{color: "red"}}>Breaking News:</span> Thr Hidden Gems of the US Open: Outside the Gates At Practice Courts P6 to P17</p>
            </div>
        </div>
        <div className='breaking_subnews'>
          <div className='breaking_subnews_card'>
            <div className='breaking_subnews_left'>
              <img src={cycle_race} alt="" srcset="" />
            </div>
            <div className='breaking_subnews_right'>
              <p className='subnews_headline'>Qatar Beats Italy to Reach Men’s Beach Volleyball Semifinals in Tokyo</p>
              <p className='subnews_subline'>Qatar has reached the Tokyo 2020 beach volleyball men’s semifinal after being Italy.</p>
            </div>
          </div>
          <div className='breaking_subnews_card'>
            <div className='breaking_subnews_left'>
              <img src={beach_volly} alt="" srcset="" />
            </div>
            <div className='breaking_subnews_right'>
              <p className='subnews_headline'>Katie Taylor’s Impact on Women’s Boxing Hits Home for Young Irish Fighters</p>
              <p className='subnews_subline'>Kaci Rock was an elementary school student when she laced up the gloves at Bray Boxing Club.</p>
            </div>
          </div>
          <div className='breaking_subnews_card'>
            <div className='breaking_subnews_left'>
              <img src={women_box} alt="" srcset="" />
            </div>
            <div className='breaking_subnews_right'>
              <p className='subnews_headline'>Kaden Groves holds off Fillipo Ganna to Win Stage Five of the Vuelta a Espana</p>
              <p className='subnews_subline'>Australian takes back-to-back victories, as Ranco Evenpoel gains six seconds in red jersey battle</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default BreakingNews