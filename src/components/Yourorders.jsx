import React, { useEffect, useState } from 'react';
import axiosInstance from '../helpers/axiosInstance';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import "./CSS/yourorders.css";

const Yourorders = () => {
  let navigate = useNavigate() ;
  let [items , setItems] =useState([])


  useEffect(()=>{
    let fetchdata= async ()=>{
    let  {data}= await axiosInstance.get("/posts")
    setItems(data)
    }
    fetchdata()
},[])


  let handleDelete = (id)=>{
    console.log(id);
    axiosInstance.delete(`/posts/${id}`)
    toast.error(`item removed`)

    window.location.assign("/")
  }
  return (
    <div className='container1'>
    {items.map((x)=>{

      return (
        
        <div className='cards'>
            {/* <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${x.fname}`} alt="" /> */}
            <h3 className='text-focus-in'>Fooditem Name : {x.fname}</h3>
            <h3 className='text-focus-in'>Food Qty : {x.fqty}</h3>
            <h3 className='text-focus-in'>Food Price : {x.fprice}</h3>
            <div className='btn-block'>
                <button>
                  <Link className='links' to={`/update/${x.id}`}>Update</Link>
                  {/* <Link to={"/update"}>Update</Link> */}
                 
                </button>
                <button onClick={()=>{
                    handleDelete(x.id)
                }}>Delete</button>
            </div>
        </div>
      )
    })}
</div>
  );
}

export default Yourorders;
