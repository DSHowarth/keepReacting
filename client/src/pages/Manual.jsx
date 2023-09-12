import React, { useState } from "react";
import Card from "react-bootstrap/Card";

const Manual = () => {
  const greek = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩσς";
  const alphabet = "ZKFYPEXTRNGQLUAMSIJBCODWVH";

  // State variables for each card
  const [showTable1, setShowTable1] = useState(false);
  const [showTable2, setShowTable2] = useState(false);

  // Functions to toggle the tables for each card
  const toggleTable1 = () => {
    setShowTable1(!showTable1);
  };

  const toggleTable2 = () => {
    setShowTable2(!showTable2);
  };

  const rows = [];
  for (let i = 0; i < greek.length; i++) {
    const greekLetter = greek[i];
    const alphabetLetter = alphabet[i];

    rows.push(
      <tr key={i}>
        <td>{greekLetter}</td>
        <td>{alphabetLetter}</td>
      </tr>
    );
  }

  const colors = [
    "#FFFFFF",
    "#000000",
    "#008000",
    "#FF0000",
    "#0000FF",
    "#EE82EE",
    "#FFFF00",
    "#FFA500",
    "#808080",
    "#00FFFF",
  ];

  const colorRows = colors.map((color, index) => (
    <tr key={index} style={{ backgroundColor: color }}>
      <td>↓ </td>
    </tr>
  ));

  return (
    <div>
      <h1 className="manual-h1">Game Manual</h1>

      <div className="d-flex flex-row justify-content-center align-items-start">
        {/* First Card */}
        <Card
          className={`mb-2 ${showTable1 ? "table-open" : ""}`}
          onClick={toggleTable1}
          style={{ height: showTable1 ? "5%" : "100%" }}
        >
          <Card.Body>
            <Card.Title>Click here for hint</Card.Title>
            {showTable1 && (
              <div className="popup">
                <button onClick={toggleTable1}>Close</button>
                <table className="manual-table">
                  <tbody>{rows}</tbody>
                </table>
              </div>
            )}
          </Card.Body>
        </Card>

        {/* Second Card */}
        <Card
          className={`mb-2 ${showTable2 ? "table-open" : ""}`}
          onClick={toggleTable2}
          style={{ height: showTable2 ? "5%" : "100%" }}
        >
          <Card.Body>
            <Card.Title>Click here for hint</Card.Title>
            {showTable2 && (
              <div className="popup">
                <button onClick={toggleTable2}>Close</button>
                <table className="manual-table">
                  <tbody>{colorRows}</tbody>
                </table>
              </div>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Manual;
