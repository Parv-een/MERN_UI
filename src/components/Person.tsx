import { useState } from "react";
import PersonList from "../models/person";

export default function Person() {
  const [people, setPeople] = useState<PersonList[]>([
    {
      id: 3, name: "parveen", age: 23, email: "hgcjsv@gmail.com",
    }
  ]);


  return (
    <>
      <h2>List of Persons</h2>
      {people.map((person) => (
        <p key={person.id}>
          {person.name},{person.email}.
          <strong>{person.age}</strong>
        </p>))}

      <button onClick={() => {
        setPeople((prevState) => {
          const updatedPeople = prevState.map((person) => {
            return {
              ...person,
              age: person.age + 1,
            };
          });
          return updatedPeople;
        });
      }}>Increment by one</button>

    </>

  );
}