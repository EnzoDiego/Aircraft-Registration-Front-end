import { useState } from "react";
import AircraftForm from "../components/AircraftForm";
import AircraftList from "../components/AircraftList";
import { createAeronave, updateAeronave } from "../services/api";

export default function Home() {
  const [editData, setEditData] = useState(null);
  const [reload, setReload] = useState(false);

  function handleSave(data) {
    const action = editData
      ? updateAeronave(editData.id, data)
      : createAeronave(data);

    action.then(() => {
      setEditData(null);
      setReload(prev => !prev);
    });
  }

  return (
    <div className="container">
      <AircraftForm onSave={handleSave} editData={editData} />
      <AircraftList onEdit={setEditData} reload={reload} />
    </div>
  );
}