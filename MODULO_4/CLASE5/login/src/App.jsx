import { useState } from 'react'
import './App.css'
import FormComponent from './form/formComponent'
import HomePage from './page/homePage'

function App() {
 
  const [user, setUser] = useState([])
  console.log(user,'user <----');
  

  return (
    <div>
      {
        !user.length > 0
        ? <FormComponent setUser={setUser}/>
        : <HomePage user={user} setUser={setUser}/>
      }
      
      
    </div>
  )
}

export default App
