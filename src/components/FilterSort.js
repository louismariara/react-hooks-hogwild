import React from "react";

function FilterSort({ onToggleGreased, onSortChange }) {
  return (
    <div className="filter-sort">
      <button onClick={onToggleGreased}>Toggle Greased</button>
      <select onChange={(e) => onSortChange(e.target.value)}>
        <option value="name">Sort by Name</option>
        <option value="weight">Sort by Weight</option>
      </select>
    </div>
  );
}

export default FilterSort;