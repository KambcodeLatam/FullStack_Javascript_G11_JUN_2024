
import { useEffect, useState } from 'react'
import './App.css'
import Hijo from './components/hijo/hijo'

function App() {
  
  const [imagen, setImagen] = useState('')
  const [nombre, setNombre] = useState('')


  useEffect(() => {
    const url = 'https://rickandmortyapi.com/api/character/4'

    fetch(url)
    .then(res => res.json())
    .then((data)=>{
      console.log(data,'data <-----');
      setImagen(data.image)
      setNombre(data.name)
    })
    
  }, [])
  




  return (
    <div>
      <h1>Hola mundo</h1>
      <Hijo imagen={imagen} nombre={nombre}/>
    </div>
  )
}

export default App
