import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./Favorites.module.css"

const Favorites = () => {
    const {myFavorites} = useSelector(state => state)
    return (
        <div>
            {
                myFavorites.map((character) => {
                    return(
                        <div>
                            <div className={style.dataContainer}>
                                  <h2>{character.name}</h2>
                                  <h2>{character.species}</h2>
                                  <h2>{character.gender}</h2>
                            </div>
                            <Link to={`/detail/${character.id}`}>
                                  <img className={style.image} src={character.image} alt={character.name} />
                            </Link>
                        </div>
            
                    )
                })
            }

        </div>
    )
}

export default Favorites;