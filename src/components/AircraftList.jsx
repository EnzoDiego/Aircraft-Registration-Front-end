export default function AircraftList() {
  const aeronaves = [
    { id: 1, nome: "Boeing 737", modelo: "737-800", fabricante: "Boeing", ano: 2015 },
    { id: 2, nome: "Airbus A320", modelo: "A320neo", fabricante: "Airbus", ano: 2020 }
  ];

  return (
    <div className="container mt-4">
      <h2>Lista de Aeronaves</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Modelo</th>
            <th>Fabricante</th>
            <th>Ano</th>
          </tr>
        </thead>

        <tbody>
          {aeronaves.map(a => (
            <tr key={a.id}>
              <td>{a.nome}</td>
              <td>{a.modelo}</td>
              <td>{a.fabricante}</td>
              <td>{a.ano}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}