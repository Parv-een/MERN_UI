import { useState } from "react";



const RegistrationForm = ( ) => {
    

    const [firstName, setFirstName] =  useState("");
    const [lastName, setLastName] = useState("");
    const [age ,setAge] = useState(Number); 

   return(
<form>
<h1>Registration Form</h1>
<label>First Name</label> <br></br>
<input onChange = {(e) =>{
  setFirstName(e.target.value)}
}
  type="text" placeholder='firstName' ></input><br></br>

<label>Last Name</label><br></br>
<input onChange={(e) => {
  setLastName(e.target.value)
}} type ="text" placeholder='lastName' ></input><br></br>

<label>Age</label><br></br>
<input onChange = {(e) => {
  setAge(parseInt(e.target.value))}}
  type="number" placeholder ="age"></input>

<p>"Hello {firstName} {lastName}! Are you Sure you are {age} years Old"</p>

</form>
   );
}

export default RegistrationForm;
