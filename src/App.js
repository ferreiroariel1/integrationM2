import './App.css';
//import Card from './components/Card/Card';
import Cards from './components/Cards/Cards';
//import SearchBar from './components/SearchBar/SearchBar';
import NavBar from './components/NavBar/NavBar'
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App() {
  
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const username = "ferreiroariel1@gmail.com";
  const password = "123456";
  const navigate = useNavigate();
  
function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
}
//App.js
useEffect(() => {
  !access && navigate('/');
}, [access]);

 
function onSearch(character) {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.name) {
           setCharacters((oldChars) => [...oldChars, data]);
        } else {
           window.alert('No hay personajes con ese ID');
        }
     });
}
const onClose = id => {setCharacters(characters.filter(char => char.id !== id))
}
const location = useLocation();

  
  return (
    <div className="App" style={{margin:"25px", display:"flex",}}>
      {location.pathname !== "/" && <NavBar onSearch={onSearch}/>}
      
      <hr/>
      <Routes>
        <Route exact path='/' element={<Form login={login}/>}/>
       <Route path='/about' element= {<About/>} />
       <Route path='/home' element= {<Cards 
          characters={characters}
          onClose={onClose}
        />} />
        <Route path='/detail/:detailId' element= {<Detail/>} />
        <Route path='/favorites' element={<Favorites/>} />
        
      </Routes>
      
    </div>
  );
}

export default App;
