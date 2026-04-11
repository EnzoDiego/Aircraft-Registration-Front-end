import { useState } from "react";

export default function AircraftForm() {
  const [form, setForm] = useState({
    nome: "",
    modelo: "",
    fabricante: "",
    ano: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form); // depois conecta com API
  }

  return (
    <div className="container mt-4">
      <h2 className="title">Cadastro de Aeronave</h2>

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" name="nome" placeholder="Nome" onChange={handleChange} />
        <input className="form-control mb-2" name="modelo" placeholder="Modelo" onChange={handleChange} />
        <input className="form-control mb-2" name="fabricante" placeholder="Fabricante" onChange={handleChange} />
        <input className="form-control mb-2" name="ano" placeholder="Ano" onChange={handleChange} />

        <button className="btn btn-primary">Salvar</button>
      </form>
    </div>
  );
}