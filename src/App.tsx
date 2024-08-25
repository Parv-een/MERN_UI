
import { useState } from 'react';
import './App.css'
import RegistrationForm from './components/RegistrationForm';
import Person from './components/Person';
//import RegistrationForm from './components/RegistrationForm';



const App =() =>{
  const [students, setStudents] = useState<string[]>([
    "Alice",
    "Bob",
    "Charlie",
  ]) ;



  return (
    <div>
    <section>
      <h3>Students</h3>
      <ul>
        {students.map((student,index) =>(
        <li key ={index}>{student}</li>))}
      </ul>
    </section>

   <RegistrationForm />
  
   </div>

  
    
  );
};

export default App;
