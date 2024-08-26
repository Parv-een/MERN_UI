
import { useState } from 'react';
import './App.css'
import RegistrationForm from './components/RegistrationForm';
import Person from './components/Person';
import Student from './models/students';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import RegistrationForm from './components/RegistrationForm';



const App = () => {
  const [students, setStudents] = useState<Student[]>([

  ]);

  const addStudent = (student: Student): void => {
    setStudents((prevState) => [...prevState, student]);
  };



  return (
    <Container>
      <Row>
        <Col>

          <section>
            <h3>Students</h3>
            <ListGroup>
              {students.map((student, index) => (
                <ListGroupItem key={index}>{student.firstName} , {student.lastName},
                  {student.age}, {student.gradeLevel.name}
                </ListGroupItem>))}
            </ListGroup>
          </section>
        </Col>
        <Col>
          <RegistrationForm
            onFormSubmit={addStudent}
            numberOfStudentRegistered={students.length} />
          <br></br>
          <Row><Person /></Row>


        </Col>

      </Row>



    </Container>



  );
};

export default App;
