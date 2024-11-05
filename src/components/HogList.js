import React from "react";
import HogTile from "./HogTile";

function HogList({ hogs }) {
  return (
    <div className="hog-list">
      {hogs.map((hog) => (
        <HogTile key={hog.name} hog={hog} />
      ))}
    </div>
  );
}

export default HogList;