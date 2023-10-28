import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [prompt, setPrompt] = useState(""); // Estado para armazenar o prompt
  const [apiData, setApiData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/cohere", { prompt });
      setApiData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Alterar Prompt</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Digite um novo prompt"
        />
        <button type="submit">Enviar</button>
      </form>
      {apiData && (
        <div>
          <h2>Resposta:</h2>
          <p>{apiData}</p>
        </div>
      )}
    </div>
  );
}
