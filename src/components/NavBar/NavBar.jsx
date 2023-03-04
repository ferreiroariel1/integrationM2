import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar({ onSearch }) {
  return (
    <div className={style.container}>
        <NavLink to="/about"><button>About</button></NavLink>
        <NavLink to="/home"><button>Home</button></NavLink>
        <NavLink to="/favorites"><button>Favorites</button></NavLink>


      <SearchBar onSearch={onSearch} />
    </div>
  );
}
