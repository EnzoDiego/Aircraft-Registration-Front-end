import { useEffect, useState } from "react";
import { getAeronaves, deleteAeronave } from "../services/api";

export default function AircraftList({ onEdit, reload }) {
  const [aeronaves, setAeronaves] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregar();
  }, [reload]);

  function carregar() {
    setLoading(true);

    getAeronaves()
      .then(res => setAeronaves(res.data))
      .finally(() => setLoading(false));
  }

  function handleDelete(id) {
    if (!confirm("Tem certeza que deseja excluir?")) return;

    deleteAeronave(id).then(() => carregar());
  }

  if (loading) {
    return <p>Carregando aeronaves...</p>;
  }

  if (aeronaves.length === 0) {
    return <p>Nenhuma aeronave cadastrada.</p>;
  }

  return (
    <>
      <h5 className="mb-3">📋 Lista de Aeronaves</h5>

      <table className="table table-hover table-bordered align-middle">
        <thead className="table-dark">
          <tr>
            <th>Nome</th>
            <th>Modelo</th>
            <th>Fabricante</th>
            <th>Ano</th>
            <th style={{ width: "150px" }}>Ações</th>
          </tr>
        </thead>

        <tbody>
          {aeronaves.map(a => (
            <tr key={a.id}>
              <td>{a.name}</td>
              <td>{a.model}</td>
              <td>{a.manufacturer}</td>
              <td>{a.year}</td>

              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => onEdit(a)}
                >
                  ✏️
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(a.id)}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}