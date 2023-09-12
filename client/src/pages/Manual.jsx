import React, { useState } from "react";
import Card from "react-bootstrap/Card";

const Manual = () => {
  const greek = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩσς";
  const alphabet = "ZKFYPEXTRNGQLUAMSIJBCODWVH";
  const color = [
    "white",
    "black",
    "green",
    "red",
    "blue",
    "violet",
    "yellow",
    "orange",
    "gray",
    "cyan",
  ];

  const [showTable, setShowTable] = useState(false);

  const toggleTable = () => {
    setShowTable(!showTable);
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

  return (
    <div>
      <h1 className="manual-h1">Game Manual</h1>

      <div className="d-flex flex-column align-items-start">
        {/* Card with Table */}
        <Card
          className={`mb-2 ${showTable ? "table-open" : ""}`}
          onClick={toggleTable}
          style={{ height: showTable ? "5%" : "100%" }}
        >
          <Card.Body>
            <Card.Title> Click here for hint</Card.Title>
            {showTable && (
              <div className="popup">
                <button onClick={toggleTable}>Close</button>
                <table className="manual-table">
                  <tbody>{rows}</tbody>
                </table>
              </div>
            )}
          </Card.Body>
        </Card>

        {/* Second Card */}
        <Card className="mb-2">
          <Card.Body>
            <Card.Title>Second Card</Card.Title>
            {/* Add content for the second card here */}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Manual;
