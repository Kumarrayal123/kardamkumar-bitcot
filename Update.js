// Update.js
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Homedata } from './Home';


function Update({setData}) {
  const { id } = useParams(); 
  const navigate = useNavigate();
  
  
  const itemToUpdate = Homedata.find(item => item.id === id);
  
  const [name, setName] = useState(itemToUpdate.name);
  const [email, setEmail] = useState(itemToUpdate.email);
  const [mobile, setMobile] = useState(itemToUpdate.mobile);
  const [address, setAddress] = useState(itemToUpdate.address);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const updatedData = {
      id,
      name,
      email,
      mobile,
      address
    };
    setData(prevData => prevData.map(item => item.id === id ? updatedData : item));

    

    navigate('/');
  };

  return (
    <div>
      <h2>Update Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Email:</label>
          <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Mobile:</label>
          <input type="text" placeholder="Enter your mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Address:</label>
          <input type="text" placeholder="Enter your address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Update;