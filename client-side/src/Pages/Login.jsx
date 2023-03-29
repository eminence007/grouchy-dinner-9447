import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setpassword]=useState("")
  function signInHandler(){
    axios.post("http://loaclhost:8080/user/login",{email,password})
  }
  return <div>Login
    <label>Email</label>
    <input onChange={(e)=>{setEmail(e.target.value)}} placeholder="enter email"/>
    <label>password</label>
    <input onChange={(e)=>{setpassword(e.target.value)}}  placeholder="enter password"/>
    <button onClick={signInHandler} >Sign In</button>
  </div>;
};

export default Login;
