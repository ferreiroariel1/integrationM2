import characters from "../../data";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState,useEffect } from "react";
import { addFavorite, deleteFavorite } from "../../redux/actions";

export default function Card({ name, species, gender, image, onClose, id }) {
  
  const dispatch = useDispatch();
  const myFavorites = useSelector(state => state.myFavorites);
  const [isFav, setIsFav]= useState(false);

  const handleFavorite = () => {
      if(isFav){
        setIsFav(false);
        dispatch(deleteFavorite(id));
      }
      else{
        setIsFav(true);
        dispatch(addFavorite( name, species, gender, image, onClose, id))
      }
  } 

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);
  
  return (
    <div className={style.container}>
      {
         isFav ?
          ( <button onClick={handleFavorite}>❤️</button>) :
          ( <button onClick={handleFavorite}>🤍</button>)
}
      <div className={style.closeContainer}>
        <button className={style.button} onClick={() => onClose(characters.id)}>
          X
        </button>
      </div>
       
      <div className={style.dataContainer}>
        <h2>{name}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>
      <Link to={`/detail/${id}`}>
        <img className={style.image} src={image} alt={name} />
      </Link>
    </div>
  );
}
