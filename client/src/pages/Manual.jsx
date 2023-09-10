import React, { useState } from "react";

const Manual = () => {
  const [cypherTable, setCypherTable] = useState("");
  const [wordHint, setWordHint] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <h1>Game Manual</h1>

      {/* Cypher Table */}
      <div>
        <h2>Cypher Table</h2>
        <textarea
          rows="5"
          cols="30"
          value={cypherTable}
          onChange={(e) => setCypherTable(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Manual;
