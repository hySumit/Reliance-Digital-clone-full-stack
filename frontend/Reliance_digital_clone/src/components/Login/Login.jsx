import React, { useEffect, useState } from "react";
import { Navbar_top } from "../Navbar/Navbar_top";
import { Footer } from "../Footer/Footer";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handleSubmit = async (e)=>{
    const response  = await fetch('https://reliance-digital-clone-full-stack.onrender.com/user/login',{
      method:'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const data = await response.json()
    console.log(data);
    alert('login done')
    useNavigate("/")
  }

  return (
    <div>
      <Navbar_top />
      <div className="login flex justify-evenly items-center bg-white">
        <div className="box">
          <img
            src="https://www.reliancedigital.in/akamai/images/web/LoginWebBanner.jpeg"
            alt=""
          />
        </div>
        <div className="box w-[500px] bg-white">
          <div className="form">
            <h1 className="bg-[#d1d1d191]
            p-[5px]">Login /Register</h1>
            <hr />

            <div className="inputField">
              <div className="input entryarea text-center">
                <input type="text" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <div className="labelline">Enter Your Email</div>
              </div>
              <div className="input entryarea text-center">
                <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <div className="labelline">Enter Your Password</div>
              </div>
              <div className="btn m-auto text-center">
              <button onClick={handleSubmit} className="w-[300px] h-[40px] text-white font-semibold bg-[#E42529]">PROCEED</button>
              <p>Dont have an account ? </p>
              <Link to={'/signup'}>Create One</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
