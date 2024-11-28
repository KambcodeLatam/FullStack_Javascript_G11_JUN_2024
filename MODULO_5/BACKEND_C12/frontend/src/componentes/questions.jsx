import React, { useState, useEffect } from "react";

// Componente para enviar preguntas
export const Preguntas = () => {
  const [role, setRole] = useState("");
  const [question, setQuestion] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token").split('"')[1];

    // token = ['"', "token", '"']

    // const text = "el profe explica muy rapido y no entiendo nada".split(" ")
    // text = ["el", "profe", "explica", "muy", "rapido", "y", "no", "entiendo", "nada"]


    if (!token) {
      setResponseMessage("Token no encontrado. Por favor inicia sesión.");
      return;
    }

    try {
      const response = await fetch("https://backend-gpts.vercel.app/send-question", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role, question }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al enviar la pregunta.");
      }

      const data = await response.json();
      setResponseMessage(`Respuesta del servidor: ${data.content || "Éxito"}`);
    } catch (error) {
        if (error.message === "Invalid token") {
            localStorage.removeItem("token");
            window.location.reload();
          } else {
            setResponseMessage(error.message || "Error desconocido.");
          }
    }
  };

  return (
    <div className="form-container">
      <h2>Enviar Pregunta</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="role">Rol</label>
          <input
            type="text"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            placeholder="Ejemplo: eres un experto en react"
          />
        </div>
        <div className="form-group">
          <label htmlFor="question">Pregunta</label>
          <input
            type="text"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
            placeholder="Ejemplo: ¿Qué es un hook?"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};