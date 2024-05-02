import React, { useContext, useState } from 'react'
import "./loginCard.css";
import { RiLoginCircleFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import axios from "axios";
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';




const LoginCard = ({setSignup}) => {
    const [details, setDetails] = useState({
        email: "",
        password: "",
    })
    const [loading, setLoading] = useState(false);
    const {setCurrentUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setDetails({
           ...details,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:8080/login', details)
            setCurrentUser(response.data);
            setLoading(false);
            navigate("/")
        } catch (error) {
            setLoading(false);
            console.error("Error encountered", error);
        }
    }

  return (
    <div className='login_card'>
        <div className='login_card_top'>
            <RiLoginCircleFill  style={{fontSize: "48px", color: "##41424b"}}/>
            <h2>Sign in to <span style={{color: "#3e7320"}}>Persona</span>Press</h2>
            <p>Welcome back! Please sign in to continue</p>
            <div className='social_login_container'>
                <button className='btn_google'><FaGoogle style={{marginRight: "10px", transform: "translateY(-0.5px)"}}/>Google</button>
                <button className='btn_facebook'><FaFacebook style={{marginRight: "10px"}} />Facebook</button>
            </div>
            <div className='login_credentail_box'>
                <p>Email address</p>
                <input type="email" name="email" onChange={handleChange}/>
                <p style={{marginTop: "10px"}}>Password</p>
                <input type="password" name="password" onChange={handleChange}/>
                <button className='btn_signin' onClick={handleLogin} disabled={false}>
                    {
                        loading?<Loading />:'Sign in'
                    }
                    <FaLongArrowAltRight style={{marginLeft: "10px"}}/>
                </button>
            </div>
        </div>
        <div className='login_card_bottom'>
            <p>Don't have an account? <span style={{color: "#3e7320", cursor: "pointer"}} onClick={setSignup}>Sign Up</span></p>
        </div>
    </div>
  )
}

export default LoginCard