import { useEffect, useState } from "react";

export default function AircraftForm({ onSave, editData }) {
  const [form, setForm] = useState({
    name: "",
    model: "",
    manufacturer: "",
    year: ""
  });

  useEffect(() => {
    if (editData) {
      setForm(editData);
    }
  }, [editData]);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: name === "year" ? Number(value) : value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave(form);

    if (!editData) {
      setForm({
        name: "",
        model: "",
        manufacturer: "",
        year: ""
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h5 className="mb-3">
        {editData ? "✏️ Editar Aeronave" : "➕ Nova Aeronave"}
      </h5>

      <input
        className="form-control mb-2"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Nome"
      />

      <input
        className="form-control mb-2"
        name="model"
        value={form.model}
        onChange={handleChange}
        placeholder="Modelo"
      />

      <input
        className="form-control mb-2"
        name="manufacturer"
        value={form.manufacturer}
        onChange={handleChange}
        placeholder="Fabricante"
      />

      <input
        type="number"
        className="form-control mb-3"
        name="year"
        value={form.year}
        onChange={handleChange}
        placeholder="Ano"
      />

      <button className="btn btn-primary w-100">
        {editData ? "Atualizar" : "Salvar"}
      </button>
    </form>
  );
}