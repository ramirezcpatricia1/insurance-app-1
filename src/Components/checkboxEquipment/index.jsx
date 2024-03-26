import React, { useState, useEffect } from "react";
import Papa from "papaparse";

function SelectEquipment() {
  const [equipment, setEquipment] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("publicWMC1.csv");
        const reader = response.body.getReader();
        const result = await reader.read();
        const decoder = new TextDecoder("utf-8");
        const csv = decoder.decode(result.value);
        const { data } = Papa.parse(csv, { header: true });

        setEquipment(data);
      } catch (error) {
        console.error("Error al cargar el archivo CSV:", error);
      }
    };
    fetchData();
  }, []);

  const handleCheckboxChange = (event, item) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedItems([...selectedItems, item]);
    } else {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    }
  };

  return (
    <div>
      <p>De la base de datos, por favor seleccione los equipos a reportar:</p>
      <ul>
        {equipment.map((item, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={(event) => handleCheckboxChange(event, item)}
              />
              {item.equipment}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectEquipment;
