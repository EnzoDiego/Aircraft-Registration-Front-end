import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAeronaves, updateAeronave } from "../services/api";

export default function EditAircraft() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    model: "",
    manufacturer: "",
    year: ""
  });

  useEffect(() => {
    getAeronaves().then(res => {
      const aeronave = res.data.find(a => a.id == id);
      setForm(aeronave);
    });
  }, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateAeronave(id, form).then(() => {
      alert("Atualizado!");
      navigate("/listing");
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Aeronave</h2>

      <input name="name" value={form.name} onChange={handleChange} />
      <input name="model" value={form.model} onChange={handleChange} />
      <input name="manufacturer" value={form.manufacturer} onChange={handleChange} />
      <input name="year" value={form.year} onChange={handleChange} />

      <button type="submit">Atualizar</button>
    </form>
  );
}