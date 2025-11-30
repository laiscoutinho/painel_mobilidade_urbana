export default function ETAList({ itens }) {
  return (
    <div style={{ width: "100%", color: "white" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {itens.map((eta) => (
                <div
                    key={eta.id}
                    style={{
                    padding: 15,
                    borderRadius: 10,
                    background: "#2c2c2c",
                    display: "flex",
                    justifyContent: "space-between",
                    }}
                >
                    <div>
                        <strong>Linha:</strong> {eta.linha} <br />
                        <strong>Parada:</strong> {eta.paradaId}
                    </div>
                    <div>
                        <strong>Chegada Prevista:</strong> {eta.chegadaPrevista}
                    </div>
                </div>
            ))}
            {itens.length === 0 && (
                <p style={{ opacity: 0.7, marginTop: 20 }}>
                    Nenhum resultado encontrado.
                </p>
            )}
        </div>
    </div>
  );
}
