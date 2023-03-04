import { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar ({ onSearch }) {
    
    const [character, setCharacters] = useState("");
    const handleChange = e => {
        const {value} = e.target;
        setCharacters(value)
    }
    return (
        <div className={style.busquedaWrapper}>
            <div className={style.busqueda}>
                <input 
                    type="search" 
                    name="search"
                    id="search"
                    onChange={handleChange}
                />
                <button onClick={() => onSearch (character)}>Agregar</button>
            </div>
        </div>
    );
}
