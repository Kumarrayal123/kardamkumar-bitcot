import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Homedata } from './Home'


function Add(){
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[mobile,setMobile]=useState('')
    const[address,setAdress]=useState('')
    const navigate =useNavigate()


    const handleSubmit = (event) => {
        event.preventDefault();
        const newData ={
            id:(Homedata.length + 1).toString(),
            name,
            email,
            mobile,
            address
        };
        Homedata.push(newData)
        navigate('/');
    };

    const handleReset = () => {
        setName('');
        setEmail('');
        setMobile('');
        setAdress('');
    };
  return (
    <div>
     <form onSubmit={handleSubmit}>
    <div class="mb-3">
      <label>Name:</label>
      <input type="text" placeholder= "Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
    <div class="mb-3">
      <label>Email:</label>
      <input type="text"  placeholder=" Enter your email"  value={email}onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div class="mb-3">
    <label>Mobile:</label>
    <input type="text" placeholder="Enter your mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
    </div>

    <div class="mb-3">
    <label>Adress:</label>
    <input type="text" placeholder="Enter your adress" value={address} onChange={(e)=>setAdress(e.target.value)}/>
    </div>

    <button>Submit</button>
    <button onClick={() => handleReset()}>Reset</button>

   </form>

    </div>
  )
}

export default Add