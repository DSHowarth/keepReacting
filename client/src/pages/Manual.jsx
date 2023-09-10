import React, { useState } from "react";

const Manual = () => {
  const [cypherTable, setCypherTable] = useState("");
  const [wordHint, setWordHint] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const greek = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩσς";
  const alphabet = "ZKFYPEXTRNGQLUAMSIJBCODWVH";

  const tableStyle = {
    border: "1px solid #000",
    borderCollapse: "collapse",
    width: "100%",
  };

  const headerCellStyle = {
    border: "1px solid #000",
    backgroundColor: "purple",
    color: "white",
    padding: "8px",
  };

  const dataCellStyle = {
    border: "1px solid #000",
    padding: "8px",
  };

  // Create an array of rows based on the greek and alphabet strings
  const rows = [];
  for (let i = 0; i < greek.length; i++) {
    const greekLetter = greek[i];
    const alphabetLetter = alphabet[i];

    rows.push(
      <tr key={i}>
        <td style={dataCellStyle}>{greekLetter}</td>
        <td style={dataCellStyle}>{alphabetLetter}</td>
      </tr>
    );
  }

  return (
    <div>
      <h1>Game Manual</h1>

      {/* Cypher Table */}
      <div>
        <h2>Cypher Table</h2>
        {/* Table with header cell and data cell styles */}
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={headerCellStyle}>Greek</th>
              <th style={headerCellStyle}>Alphabet</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Manual;
