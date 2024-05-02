import React, { useState } from 'react'
import "./signupCard.css";
import { RiLoginCircleFill } from "react-icons/ri";
import { FaLongArrowAltRight } from "react-icons/fa";
import axios from "axios";
import Loading from '../Loading/Loading';

const SignupCard = ({setSignup}) => {
  const [details,setDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading,setLoading] = useState(false);

  const handleChange = e => {
    setDetails({
     ...details,
      [e.target.name]: e.target.value
    })
  }

  const handleSignup = async (e) => { 
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8080/signup', details)
      const addNews = await axios.post(`http://localhost:8080/bulk-news/${response.data._id}`)
      setLoading(false);
      setSignup();
    } catch (error) {
      console.error("Error encountered", error);
    }
  }

  return (
    <div className='signup_card'>
        <div className='signup_card_top'>
            <RiLoginCircleFill  style={{fontSize: "48px", color: "##41424b"}}/>
            <h2>Sign up to <span style={{color: "#3e7320"}}>Persona</span>Press</h2>
            <p>Welcome folks! Please sign up to continue</p>
            <div className='signup_credentail_box'>
                <p>Your name</p>
                <input type="text" name="name" onChange={handleChange}/>
                <p>Email address</p>
                <input type="email" name="email" onChange={handleChange}/>
                <p style={{marginTop: "10px"}}>Password</p>
                <input type="password" name="password" onChange={handleChange}/>
                <button className='btn_signin' onClick={handleSignup} disabled={loading}>
                  {
                    loading?<Loading />:'Sign up'
                  }
                   <FaLongArrowAltRight style={{marginLeft: "10px"}}/>
                </button>
            </div>
        </div>
        <div className='signup_card_bottom'>
            <p>Already have an account? <span style={{color: "#3e7320", cursor: "pointer"}} onClick={setSignup}>Sign In</span></p>
        </div>
    </div>
  )
}

export default SignupCard