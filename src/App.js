import React,{ useState } from 'react';

import './App.css'; 

function App (){
  const [name,setName]=useState("");
  const handleChange=(e)=> {
    const value=e.target.value;
    setName(value)
  };
  
    return (
      <div className="App">
        <label > 
          Name:
       <input type='text' value={name} onChange={handleChange} />
       <p>my Name is : {name}</p>
       </label>
      </div>
    );
  
}

export default App;
