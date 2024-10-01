import React from 'react'
import Imagen from '../imagen/imagen'
import Nombre from '../nombre/nombre'

const Hijo = (props) => {

    console.log(props,'propsss en el hijo');
    

  return (
    <div>
        <Imagen imagen={props.imagen}/>
        <Nombre nombre={props.nombre}/>
    </div>
  )
}

export default Hijo