import React from 'react'

const HomePage = (props) => {

    const handleClick = () =>{
        props.setUser([])
    }

  return (
    <div>
        <h1>HomePage</h1>
        <h2>Nombre: {props.user}</h2>
        <button onClick={handleClick}>
            Salir
        </button>
    </div>
  )
}

export default HomePage