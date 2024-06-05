import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [cor, setCor] = useState("bg-red");
  const [bgColor, setBgColor] = useState("bg-dia");

  function mudarCor() {
    if (cor === "bg-red") {
      setCor("bg-blue");
    } else {
      setCor("bg-red");
    }
  }

  function mudarBg() {
    if (bgColor === "bg-dia") {
      setBgColor("bg-noite");
    } else {
      setBgColor("bg-dia");
    }
  }

  return (
    <div className="bg-geral">
      <div>
        <button onClick={mudarBg}>Alternar Dia/Noite</button>
      </div>
      <div className="container_principal">
        <div className="container">
          <h1>ALTERANDO A COR</h1>
          <div className={cor}></div>
          <button onClick={mudarCor} className="btn">
            Clique aqui para alterar a cor
          </button>
        </div>
      </div>
    </div>
  );
}
