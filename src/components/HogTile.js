import React, { useState } from "react";

function HogTile({ hog }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails((prev) => !prev);

  return (
    <div className="hog-tile" onClick={toggleDetails}>
      <h3>{hog.name}</h3>
      <img src={hog.image} alt={hog.name} />
      {showDetails && (
        <div className="hog-details">
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight}</p>
          <p>Greased: {hog.greased ? "Yes" : "No"}</p>
          <p>Highest Medal: {hog["highest medal achieved"]}</p>
        </div>
      )}
    </div>
  );
}

export default HogTile;