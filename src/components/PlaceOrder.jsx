import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from './../helpers/axiosInstance';
import { toast } from 'react-toastify';
import "./CSS/placeorder.css";
import 'react-toastify/dist/ReactToastify.css';

const PlaceOrder = () => {
  let navigate = useNavigate() ; 
  let [fname , setFname] = useState("")
  let [fprice , setFprice] = useState("")
  let [fqty , setFqty] = useState("")

  let additem = (e)=>{
    e.preventDefault()
    let payload = {
        fprice,fname , fqty
    }
    axiosInstance.post("/posts" , payload)
    toast.success(` ThankYou enjoy the ${fname} !`)
    navigate("/yourorders")
    
}
  return (
    <div className='form-block'>
      <h1>Order your food here</h1>
    <form  action="" style={{textAlign:"center"}}>
         <fieldset className='place'>
                 {/* <legend>Order Food</legend> */}
                 <br /> <br />
                 <label htmlFor="">FoodItem Name : </label>
                 <input type="text" onChange={(e)=>{
                         setFname(e.target.value)
                 }} /> <br /> <br />
                 <label htmlFor="">Food Qty : </label>
                 <input type="text" onChange={(e)=>{
                         setFqty(e.target.value)
                 }} /> <br /> <br />
                 <label htmlFor="">Food Price : </label>
                 <input type="text" onChange={(e)=>{
                         setFprice(e.target.value)
                 }}   /> <br /> <br />
                 <footer> <button onClick={additem}>ADD  </button>
                 <button>Cancel</button></footer>
                
                 <br /><br />
         </fieldset>
    </form>
 </div>
  );
}

export default PlaceOrder;
