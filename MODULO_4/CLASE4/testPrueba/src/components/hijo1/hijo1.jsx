import React from 'react'

const Hijo1 = (props) => {

    console.log(props,'props ,----------');
    
  
    const test = ' Soy el hijo favorito '
  
    return (
    <div>
        <h1>
            {test}
        </h1>
        <h2>
            Nombre:
            <span>{props.nombre}</span>
        </h2>
        <h2>
            Que juga vas a tomar:
            <span>{props.jugo}</span>
        </h2>
        <h2>
            Que edad tienes:
            <span>{props.edad}</span>
        </h2>
    </div>
  )
}

export default Hijo1