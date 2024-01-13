import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axiosInstance from '../helpers/axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';
import "./CSS/placeorder.css";

const Update = () => {
  let {id} = useParams()
  let navigate = useNavigate() ; 
  let [fname , setFname] = useState("")
  let [fprice , setFprice] = useState("")
  let [fqty , setFqty] = useState("")

  useEffect(()=>{
    let fetchdata = async()=>{
            let {data} = await axiosInstance.get(`/posts/${id}`)
            setFname(data.fname)
            setFprice(data.fprice)
            setFqty(data.fqty)
    }
    fetchdata()
},[])

let additem = (e)=>{
  e.preventDefault()
  let payload ={
      fname ,fprice,fqty
  }
  axiosInstance.put(`/posts/${id}` , payload)
  toast.info(`Updated your order ${fname}  `)
  navigate("/")

}
  return (
    <div className='form-block'>
    <h1>Update your Order here</h1>
  <form  action="" style={{textAlign:"center"}}>
       <fieldset className='place'>
               {/* <legend>Order Food</legend> */}
               <br /> <br />
               <label htmlFor="">FoodItem Name : </label>
               <input type="text" onChange={(e)=>{
                       setFname(e.target.value)
               }} value={fname} /> <br /> <br />
               <label htmlFor="">Food Qty : </label>
               <input type="text" onChange={(e)=>{
                       setFqty(e.target.value)
               }} value={fqty}/> <br /> <br />
               <label htmlFor="">Food Price : </label>
               <input type="text" onChange={(e)=>{
                       setFprice(e.target.value)
               }}  value={fprice} /> <br /> <br />
               <footer> <button onClick={additem}>ADD  </button>
               <button>Cancel</button></footer>
              
               <br /><br />
       </fieldset>
  </form>
</div>
  );
}

export default Update;
