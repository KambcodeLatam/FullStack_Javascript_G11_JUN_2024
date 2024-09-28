import React from 'react'

const Imagen = (props) => {
    console.log(props,'<---- props');
    
  return (
    <div>
        <h1>Soy el componente Hijo</h1>
        <img src={props.img} alt="imagen rick" />
        <h2>Nombre: {props.nombre}</h2>
        <h2>Direccion: {props.direccion}</h2>
        <h2>Telefono: {props.telefono}</h2>
    </div>
  )
}

export default Imagen