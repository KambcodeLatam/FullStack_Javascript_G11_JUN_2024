import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const User = () => {

    const [data, setData] = useState([])
    const param = useParams();
    const id = param.id

    console.log(id);
    
    
    console.log(param, 'param');

    useEffect(() => {
      
    fetch('https://rickandmortyapi.com/api/character/' + id)
    .then((res) => res.json())
    .then((data) => {
        console.log(data,'data <--');
        setData(data)
        
    })
      
    }, [])
    

  return (

    <div>
        <h1>Componente User</h1>
        <h2>
            <ul>
                <li>
                {data.name}
                </li>
                <li>
                {data.status}
                </li>
            </ul>
        </h2>
    </div>
  )
}

export default User