import { FormEvent, useState } from "react";
import Student from "../models/students";
import GRADE_LEVEL from "../constants/gradeLevels";
import { Button, Dropdown, FloatingLabel, Form, FormControl, FormLabel, Row } from "react-bootstrap";

interface RegistrationFormProps {
  numberOfStudentRegistered: number;
  onFormSubmit: (formData: Student) => void;
}


// enum DaysOfTheWeek {
//     MONDAY ="Monday",
//     TUESDAY ="Tuesday",
//     WEDNESDAY ="Wednesday",

// }




//export default function RegistrationForm 
function RegistrationForm({ numberOfStudentRegistered,
  onFormSubmit,

}: RegistrationFormProps) {



  const [student, setStudent] = useState<Student>({
    firstName: "",
    lastName: "",
    age: 0,
    gradeLevel: {
      id: 0,
      name: "",
    },
    grades: [],
  });

  const onSubmitHanlder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onFormSubmit(student);
    alert(JSON.stringify(student, null, 2));
  }


  return (
    <section>
      <h3> Number of Students Registered</h3>
      <span>
        number of students registered: {numberOfStudentRegistered}
      </span>
      <h1>Registration Form</h1>
      <Form onSubmit={onSubmitHanlder}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <FormLabel >First Name</FormLabel>
          <Form.Control onChange={(e) =>
            setStudent((mostRecentState) => ({
              ...mostRecentState,
              firstName: e.target.value,
            }))}
            required
            value={student.firstName}
            type="text"
            placeholder='firstName'
          >
          </Form.Control>
        </Form.Group>



        <Form.Group>
          <FormLabel>Last Name</FormLabel><br></br>
          <FormControl onChange={(e) => {
            setStudent((mostRecentState) => ({
              ...mostRecentState,
              lastName: e.target.value,
            }))
          }}
            type="text"
            placeholder='lastName'
            value={student.lastName}>
          </FormControl>

        </Form.Group>



        <Form.Group>
          <FormLabel>Age</FormLabel><br></br>
          <FormControl onChange={(e) => {
            setStudent((mostRecentState) => ({
              ...mostRecentState,
              age: +e.target.value,
            }))
          }}
            type="number"
            placeholder="age"
            value={student.age}>

          </FormControl>
        </Form.Group>


        <Form.Group>
          <FormLabel>Grade Level</FormLabel>
          <Form.Select
            onChange={(e) =>
              setStudent((mostRecentState) => ({
                ...mostRecentState,
                gradeLevel: GRADE_LEVEL.find(
                  (gl) => gl.id === +e.target.value)
                  || { id: 0, name: "" },
              }))
            }
          >
            {GRADE_LEVEL.map((gradeLevel, index) => (
              <option value={gradeLevel.id} key={index}>
                {gradeLevel.name}</option>))}
          </Form.Select>
        </Form.Group>


        <br></br>
        <Form.Group>
          <Button className="btn btn-primary" onClick={() => onSubmitHanlder} type="submit"> Complete Form</Button>

        </Form.Group>



      </Form>
    </section>


  );
}

export default RegistrationForm;
