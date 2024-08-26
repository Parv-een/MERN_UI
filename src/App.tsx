
import { useState } from 'react';
import './App.css'
import RegistrationForm from './components/RegistrationForm';
import Person from './components/Person';
import Student from './models/students';
//import RegistrationForm from './components/RegistrationForm';



const App =() =>{
  const [students, setStudents] = useState<Student[]>([
    
  ]) ;

  const addStudent =(student: Student) : void =>{
    setStudents((prevState) => [...prevState ,student]);
  };



  return (
    <div>
    <section>
      <h3>Students</h3>
      <ul>
        {students.map((student,index) =>(
        <li key ={index}>{student.firstName}</li>))}
      </ul>
    </section>

   <RegistrationForm
   onFormSubmit={addStudent}
   numberOfStudentRegistered={students.length} />
   <Person />
  
   </div>

  
    
  );
};

export default App;
