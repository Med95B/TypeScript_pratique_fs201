import React from "react";
import { personne } from "./types";


interface IProps {
        people:personne[];
        onDelete: (name: string) => void;
        onEdit: (person: personne) => void;
}

const Invites: React.FC<IProps>=({people, onDelete, onEdit})=>{

    return(
        <ul>
            {
                people.map(p =>(
                    <li className="list" key={p.name}>
                        <div className="list-header">
                            <img src={p.img} alt={p.name} className="list-img"/>
                            <h2>{p.name}</h2>
                        </div>
                        <p>{p.age}</p>
                        <p className="list-fonction">{p.fonction}</p>
                        <button onClick={() => onDelete(p.name)}>Supprimer</button>
                        <button onClick={() => onEdit(p)}>Modifier</button>
                    </li>)
                )
            }
        </ul>
    )
}

export default Invites