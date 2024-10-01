import './App.css'
import Hijo1 from './components/hijo1/hijo1'
import Hijo2 from './components/hijo2/hijo2'

function App() {

  const jugo1 = 'maracuya en leche'
  const jugo2 = 'papaya'
  const nombre1 = 'harry'
  const nombre2 = 'wilian'
  const edad = '13'

  return (
    
    <div>
      <h1>Hola mundo soy el padre</h1>

      <Hijo1 jugo={jugo1} nombre={nombre1} edad={edad}/>
      <Hijo2 jugo={jugo2} nombre={nombre2} edad={edad}/>
    </div>
  )
}

export default App
