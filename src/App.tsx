
import { useState } from 'react';
import './App.css'

function App() {

  const [enteredName ,setEnteredName] =useState("");
  //useState read the piece of code and relaod the page 
  

  return (
    <div>
      <h1>Hello {enteredName}</h1>
      <input onChange = {(e) => {
        setEnteredName(e.target.value)}}type="text" placeholder='name'></input>


      {/* <button onClick={() =>{
        setEnteredName ("kaur");
      }}>Click here</button> */}
    </div>
    
  );
}

export default App
