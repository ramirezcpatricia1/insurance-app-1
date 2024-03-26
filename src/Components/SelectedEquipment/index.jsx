import React, { useState, useEffect } from "react";
import Papa from "papaparse";

function SelectEquipment() {
  const [equipment, setEquipment] = useState([]);
  const [selectEquipment, setSelectEquipment] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("publicWMC1.csv");
        const reader = response.body.getReader();
        const result = await reader.read();
        const decoder = new TextDecoder("utf-8");
        const csv = decoder.decode(result.value);
        const { data } = Papa.parse(csv, { header: true });
        console.log(data);

        setEquipment(data.map((row) => row.equipment));
      } catch (error) {
        console.error("Error al cargar el archivo CSV:", error);
      }
    };
    fetchData();
  }, []);

  const handleEquipmentChange = (event) => {
    setSelectEquipment(event.target.value);
  };

  return (
    <>
      <p> De la base de datos por favor escoja el equipo a reportar </p>
      <select
        id="selectEquipment"
        value={selectEquipment}
        onChange={handleEquipmentChange}
      >
        <option value="">Seleccionar Equipo</option>
        {equipment.map((equip, index) => (
          <option key={index} value={equip}>
            {equip}
          </option>
        ))}
      </select>
    </>
  );
}

export default SelectEquipment;
