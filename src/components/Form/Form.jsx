import style from "./Form.module.css"
import { useState } from "react";
import Validation from "./Validation";

export default function Form(props) {

    const [userData, setUserData] = useState({
        username: '',
         password: ''
        });

    const [errors, setErrors] = useState({
        username: '',
        password: '' 
    })

        const handleInputChange  = (e) => {
            const {name, value} = e.target;
            setUserData({
                ...userData,
                [name]: value
            })
            setErrors(
                Validation({
                    ...userData,
                    [name]: value
                })
            )
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            props.login(userData);
        }

    return(
        <div className={style.divForm}>
            
        <form onSubmit={handleSubmit} className={style.form}>
            <label className={style.busqueda}>Username</label>
            <input
                  type="text"
                  name="username"
                  value={userData.username}
                  onChange={handleInputChange}
            />
            <p className={style.errors}>
                {errors.username && errors.username}
            </p>
             <br />    
            <label>Password</label>
            <input
                 type="password"
                 name="password"
                 value={userData.password}
                 onChange={handleInputChange}
            />
            <p className={style.errors}>
                {errors.password && errors.password}
            </p>
             <hr />
            <button className={style.button}>Login</button>
        </form>

        </div>
    )

}