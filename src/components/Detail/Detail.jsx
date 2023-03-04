import style from "./Detail.module.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Detail(props) {
    const {detailId} = useParams();
    const [character, setCharacter] =useState({});
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);


    return (
        <div>
            <h1>Detail</h1>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <h2>{character.gender}</h2>
            <h2>{character.species}</h2>
            <h2>{character.status}</h2>
            {character.origin && <h3>{character.origin.name}</h3>}
        </div>
    )
} 
