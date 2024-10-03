import React, { useState } from "react";
import "./formComponent.css";
import HomePage from "../page/homePage";

const FormComponent = (props) => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    console.log(name, 'name', password, 'password');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(name === '' && password === ''){
            setError(true)
        }else{
            setError(false)
            props.setUser([name])
        }


    }

  return (
    <div>
      <h1>Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <p>Nombre</p>
        <input onChange={e => {
            console.log(e.target.value,'e');
            setName(e.target.value)
        }} type="text" value={name} placeholder="tu nombre" />
        {error && <p className="error">El campo es obligatorio</p>}
        <p>Contrasena</p>
        <input type="text" onChange={e => {
            setPassword(e.target.value)
        }} placeholder="contrasena" value={password} />
        {error && <p className="error">El campo es obligatorio</p>}
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default FormComponent;
