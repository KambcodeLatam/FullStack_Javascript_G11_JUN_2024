
import { useEffect, useState } from 'react'
import './App.css'
import CharacterCard from './characterCard/characterCard'

function App() {

  const [data, setData] = useState([])

    useEffect(() => {
      
        const url = 'https://rickandmortyapi.com/api/character'
        fetch(url)
        .then(res => res.json())
        .then((data) => {

          
            setData(data.results)
        })
    
    
    }, [])
    

  return (
    <div>
      <h1>Funcion Map</h1>
      {
        data.map((item) => {          
          return <CharacterCard key={item.id} nombre={item.name} img={item.image} status={item.status} created={item.created} />
        })
      }
      
    </div>
  )
}

export default App
