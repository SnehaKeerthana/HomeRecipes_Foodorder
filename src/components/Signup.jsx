import React, { useState } from 'react';
import "./CSS/signup.css";
import { Link, useNavigate } from 'react-router-dom';
const Signup = () => {
  let navigate=useNavigate();
  let[username,setUsername]=useState("");
  let[password,setPassword]=useState("");
  
  let handlesighup=(e)=>
  {
     e.preventDefault();
     window.localStorage.setItem("username",username);
     window.localStorage.setItem("password",password);
    //  navigate("/login");
    window.location.assign("/login");//to load the page
  }
  return (
    <div className='sign'>
      <form>
        <h1>SignUp Here</h1>
       <fieldset id='signform'>
            
            <label>name:</label>
            <input type='text' required/><br/><br/>
            <label>mobileno:</label>
            <input type='number' required/><br/><br/>
            <label>email:</label>
            <input type='email'  onChange={(e)=>{
            setUsername(e.target.value)
          }} required/><br/><br/>
            <label>Password:</label>
            <input type='password' onChange={(e)=>
          {
            setPassword(e.target.value)
          }} required/><br/><br/>

          <footer>
            <button onClick={handlesighup}>signup</button>
            <button>cancel</button>
          </footer>
            
            <div><Link to={"/login"} className='links'>already have an account click here to login</Link></div>
        </fieldset>
      </form>
    </div>
  );
}

export default Signup;
