import { FormEvent, useState } from "react";
import Student from "../models/students";
import GRADE_LEVEL from "../constants/gradeLevels";

interface RegistrationFormProps {
  numberOfStudentRegistered: number;
  onFormSubmit : (FormData :Student) => void;
}


// enum DaysOfTheWeek {
//     MONDAY ="Monday",
//     TUESDAY ="Tuesday",
//     WEDNESDAY ="Wednesday",
    
// }




//export default function RegistrationForm 
function RegistrationForm ({numberOfStudentRegistered, 
  onFormSubmit,
}: RegistrationFormProps ) {


    
    const [student , setStudent] =useState<Student>({
        firstName:"",
        lastName:"",
        age:0,
        gradeLevel: {
            id:0,
            name:"",
        },
        grades: [],
    });

    const onSubmitHanlder =(event:FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        alert(JSON.stringify(student,null,2));
    }
    

return(
        <form onSubmit = {onSubmitHanlder}>
           <h1>Registration Form</h1>

              <label>First Name</label> <br></br>
                <input onChange = {(e) =>
                 setStudent((mostRecentState) => ({
                 ...mostRecentState, 
                 firstName:e.target.value,
                 }))}
                 type="text" 
                 placeholder='firstName'
                 value={student.firstName}>
                </input>
                <br></br>

   

              <label>Last Name</label><br></br>
                <input onChange={(e) => {
                 setStudent((mostRecentState) => ({
                 ...mostRecentState , 
                 lastName:e.target.value, 
                  }))
                 }} 
                type ="text" 
                placeholder='lastName' 
                value={student.lastName}>
                </input>
                <br></br>



              <label>Age</label><br></br>
                 <input onChange = {(e) => {
                 setStudent((mostRecentState) => ({
                 ...mostRecentState,
                  age:+e.target.value,
                }))
                }}
                 type="number" 
                placeholder ="age"
                 value = {student.age}>

                </input>


            <select 
            onChange={(e) => 
              setStudent((mostRecentState) => ({
              ...mostRecentState,
              gradeLevel:GRADE_LEVEL.find(
              (gl) => gl.id === +e.target.value) 
              || {id:0 ,name: ""},
             }))
            }
            >
               {GRADE_LEVEL.map((gradeLevel, index) => (
               <option value ={gradeLevel.id} key ={index}>
                 {gradeLevel.name}</option>))}
  </select>

  <button onClick ={() => onSubmitHanlder} type="submit"> Complete Form</button>

  
  </form>
    
   
   );
}

export default RegistrationForm;
