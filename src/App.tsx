import { useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleClick() {
    setLoading(true);
    setMessage("");

    // Simula uma requisição (ex: login, salvar dados)
    setTimeout(() => {
      setLoading(false);
      setMessage("Ação concluída com sucesso!");
    }, 2000);
  }

  return (
    <div>
      <h1>Exercício: Botão de Carregamento</h1>
      <br />
      <p>Esse código simula uma operação de envio de dados que demora 2 segundos. </p>
      <button
        className="btn"
        onClick={handleClick}
        disabled={loading}
      >
        {loading && <span className="spinner"></span>}
        {loading ? "Enviando..." : "Enviar"}
      </button>
      <br />
      {/* Mensagem de sucesso sobreposta */}
      {message && (
        <div className="success-toast">
          <span className="success-icon">&#10003;</span>
          {message}
        </div>
      )}
    </div>
  );
}

export default App;
