import {useState, useEffect} from "react";
import Login from "./componentes/login";
import { Preguntas } from "./componentes/questions";

const App = () => {

  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setHasToken(true);
    }
  }, []);

  const handleLogin = async (username, password) => {
    const response = await fetch("https://backend-gpts.vercel.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error en el servidor");
    }
  
    const data = await response.json();
  
    // Guardar la respuesta en Local Storage
    localStorage.setItem("token", JSON.stringify(data.token));
    window.location.reload();
  
    return data; // Opcional: Devuelve los datos por si se necesitan en otra parte
  };
  

  return (
    <div className="app-container">
      {hasToken ? (
        <Preguntas />
      ) : (
        <div>
          <Login onSubmit={handleLogin} />
        </div>
      )}
    </div>
    
  );
};

export default App;
