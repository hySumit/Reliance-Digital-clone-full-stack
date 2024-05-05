import React, { useState } from "react";
import { Navbar_top } from "../Navbar/Navbar_top";
import { Footer } from "../Footer/Footer";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name,setName] = useState('')
  const [username,setUsername] = useState('')
  const toast = useToast();

  const handleToast = (message, type) => {
    toast({
      title: message,
      status: type,
      duration: 3000,
      isClosable: true,
      position: "bottom",
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://reliance-digital-clone-full-stack.onrender.com/user/register', {
        email,
        password,
        username,
        name
      });
      handleToast("User registered successfully", "success");
      console.log(response.data);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        if (error.response.data.message === "User already exist") {
          handleToast("User already exists", "error");
        } else {
          handleToast("Error while creating account", "error");
        }
      } else {
        handleToast("Error while creating account", "error");
      }
      console.error('Error registering user:', error);
    }
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
          <div className="form register">
            <h1 className="bg-[#d1d1d191] p-[5px]">Login / Register</h1>
            <hr />
            <div className="inputField">
              <div className="input entryarea text-center">
                <input type="text" required value={name} onChange={(e)=>setName(e.target.value)}/>
                <div className="labelline">Enter Your Name</div>
              </div>
              <div className="input entryarea text-center">
                <input type="text" required value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <div className="labelline">Enter Your Username</div>
              </div>
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
                <p>Already have an account ? </p>
                <Link to={'/login'}>Login</Link>
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
