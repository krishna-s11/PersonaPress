import React, { useContext, useState } from 'react'
import "./login.css"
import LoginCard from '../../components/LoginCard/LoginCard'
import SignupCard from '../../components/SignupCard/SignupCard';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Login = () => {
    const [signup,setSignup] = useState(0);
  return (
    <div className='login_pg'>
        <div className='login_header'>
            <Link to="/"><h1 style={{cursor: "pointer"}}><span style={{color: "#3e7320"}}>Persona</span>Press</h1></Link>
            <button>Subscribe</button>
        </div>
        <div className='login_pg_container'>
            {
                signup?<SignupCard setSignup={() => {setSignup(0)}}/>:<LoginCard setSignup={() => {setSignup(1)}} />
            }
        </div>
    </div>
  )
}

export default Login