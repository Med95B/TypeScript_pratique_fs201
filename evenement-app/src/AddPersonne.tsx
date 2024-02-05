import React, { useState,useEffect } from "react";
import { personne } from "./types";
interface IProps {
  people: personne[];
  setPeople: React.Dispatch<React.SetStateAction<personne[]>>;
  editingPerson?: personne;
}

export const AddPersonne: React.FC<IProps> = ({ setPeople, people,editingPerson }) => {
  const [input, setInput] = useState<personne>({
    name: "",
    age: 0,
    img: "",
    fonction: "",
  });

  useEffect(() => {
    if (editingPerson) setInput(editingPerson);
    }, [editingPerson]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]:
        e.target.name === "age" ? Number(e.target.value) : e.target.value,
    });
  };

  const handleClick = () => {
    if (!input.name || input.age === 0 || !input.img || !input.fonction) return;
    if (editingPerson) {
    setPeople(people.map(p => (p.name === input.name ? input : p)));
    } else {
    setPeople([...people, input]);
    }
    setInput({ name: "", age: 18, img: "", fonction: "" });
    };
    
    

  return (
    <div className="add-people">
      <input
        type="text"
        onChange={handleChange}
        className="add-input"
        name="name"
        value={input.name}
        placeholder="nom"
      />
      <input
        type="number"
        onChange={handleChange}
        className="add-input"
        name="age"
        value={input.age}
        placeholder="age"
      />
      <input
        type="text"
        onChange={handleChange}
        className="add-input"
        name="img"
        value={input.img}
        placeholder="url"
      />
      <input
        type="text"
        onChange={handleChange}
        className="add-input"
        name="fonction"
        value={input.fonction}
        placeholder="fonction"
      />
      <button className="add-button" onClick={handleClick}>
        Ajouter
      </button>
    </div>
  );
};
