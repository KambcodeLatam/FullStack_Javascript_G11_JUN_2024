import React from 'react'
import './characterCard.css'

const CharacterCard = ({nombre, img, status, created}) => {
    console.log(status,'status');
    
    
  return (
    <div>
        <div className='card'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <span>
                   Estado: {status}
                </span>
            </div>
            <div>
                <h1>{nombre}</h1>
            </div>
            <div>
                <h2>Fecha de creacion</h2>
                <span>{created}</span>
            </div>

        </div>
    </div>
  )
}

export default CharacterCard