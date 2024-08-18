

import Add from './Add';
import './App.css';
import { Homedata } from './Home';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Update from './Update';

function Home() {
  const [data, setData] = useState(Homedata); 
  const [searchQuery, setSearchQuery] = useState(''); 
  const navigate = useNavigate();

  useEffect(() => {
    setData(Homedata);
  }, []);

  const handleUpdate = (id) => {
    navigate(`/update/${id}`); 
  };

  const handleDelete = (id) => {
    if (id > 0 && window.confirm("Are you sure you want to delete this data?")) {
      const updatedData = data.filter(item => item.id !== id);
      setData(updatedData);
    }
  };

  const handleAddClick = () => {
    navigate('/add');
  };


  const filteredData = data.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.mobile.includes(searchQuery)
  );

  return (
    <div>
       <div>
       <input className='serach-btn' type="text" placeholder="Search..." value={searchQuery}  onChange={(e) => setSearchQuery(e.target.value)}/>
       </div>
        
        <div class="card">
         <table> 
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Address</th>
              <th><button onClick={handleAddClick}>Add+</button></th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.address}</td>   
                <td><button onClick={() => handleUpdate(item.id)}>Update</button></td>
                <td>
                  <button className="del" onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        
      </div>
    
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


