import "./App.css";
import Invites from "./ListePersonnes";
import { personne } from "./types";
import { useState,useEffect } from "react";
import { AddPersonne } from "./AddPersonne";
const listePersonnes: personne[] = [
  {
    name: "Ali",
    age: 30,
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    fonction: "Medecin",
  },
  {
    name: "sara",
    age: 32,
    img: "https://randomuser.me/api/portraits/women/10.jpg",
    fonction: "Professeur",
  },
  {
    name: "Ahmed",
    age: 27,
    img: "https://randomuser.me/api/portraits/men/20.jpg",
    fonction: "Ingenieur",
  },
];

function App() {

  const [people, setPeople] = useState<personne[]>
(
  ()=>{
    const savedpeople:string|null=localStorage.getItem('people')
    return savedpeople?JSON.parse(savedpeople):listePersonnes
  }
)

const [editingPerson, setEditingPerson]=useState<personne | undefined>(undefined);

  useEffect( ():void => {
      localStorage.setItem('people',JSON.stringify(people))
  },[people])

  const handleDelete = (name: string) => {
    const updatedPeople = people.filter(p => p.name !== name);
    setPeople(updatedPeople);
    };

    const handleEdit = (person: personne) => {
      setEditingPerson(person);
      };

  return (<>
  <h1>Invitée d'un evenement</h1>
  <div className="App">
        <Invites people={people} onDelete={handleDelete} onEdit={handleEdit}/>
        <AddPersonne people={people} setPeople={setPeople} editingPerson={editingPerson}/>
  </div>
  </>);
}

export default App;
