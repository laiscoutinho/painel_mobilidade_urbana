import { useEffect, useState } from "react";
import { getETA } from "../services/api";
// import { detectarAnomalias } from "../utils/validators";

import ETA from "../components/ETA/index";

// DOCS: Responsável por renderizar a página principal do painel de mobilidade urbana.

export default function Dashboard() {

  const [eta, setEta] = useState([]); // ETA = exibir tempo estimado de chegada

  // Função para carregar dados de ETA
  const carregar = async () => {
    const e = await getETA();
    setEta(e.data);
  };

  useEffect(() => {
    carregar();
    const timer = setInterval(carregar, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ minWidth: "70vw" }}>
      <header style={{ padding: 20 }}>
        <h1>Painel de Mobilidade Urbana</h1>
      </header>

      <ETA itens={eta} />
    </div>
  );
}
