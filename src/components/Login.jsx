import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./CSS/signup.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  let navigate=useNavigate();
  let[username,setUsername]=useState("");
  let[password,setPassword]=useState("");
 
  let handlelogin =(e)=>
  {
    e.preventDefault();
    let dbuser=window.localStorage.getItem("username");
    let dbpass=window.localStorage.getItem("password");
    console.log(dbuser);
    if(dbuser==username && dbpass==password)
    {
          // navigate("/placeorder");
          window.location.assign("/placeorder");
          toast.success("login successfully");
          
    }
    else{
      toast.error("invalid credentials");
    }
  }
  return (
    <div className='sign'>
       <h1>Login Here</h1>
      <form>
        <fieldset id='signform'>
           
            <label>Email:</label>
            <input type='text' onChange={(e)=>
      {
          setUsername(e.target.value)
      }}/><br/><br/>
            <label>Password:</label>
            <input type='password' onChange={(e)=>
      {
        setPassword(e.target.value)
      }}/><br/><br/>
      <footer>
            <button onClick={handlelogin}>Login</button>
            <button>Cancel</button>
      </footer>
           <Link to={"/signup"} className='links'>if u dont have an account Sign in here!!</Link>  
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
