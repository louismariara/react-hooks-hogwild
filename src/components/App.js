import React, { useState } from "react";
import hogsData from "../porkers_data"; // data from porkers_data.js
import HogList from "./HogList";
import FilterSort from "./FilterSort";
import HogForm from "./HogForm";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [showGreased, setShowGreased] = useState(false);
  const [sortBy, setSortBy] = useState("name");

  // Toggles greased filter
  const handleToggleGreased = () => setShowGreased((prev) => !prev);

  // Sets the sorting criteria
  const handleSortChange = (criteria) => setSortBy(criteria);

  // Adds a new hog to the list
  const addNewHog = (newHog) => {
    setHogs((prevHogs) => [...prevHogs, newHog]);
  };

  // Filters hogs by greased status
  const filteredHogs = hogs.filter((hog) =>
    showGreased ? hog.greased : true
  );

  // Sorts hogs by the selected criteria
  const sortedHogs = [...filteredHogs].sort((a, b) =>
    a[sortBy] > b[sortBy] ? 1 : -1
  );

  return (
    <div className="App" style={{ position: "relative", padding: "20px" }}>
      {/* Move the HogForm to a more prominent place */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Add a New Hog</h2>
        <HogForm addNewHog={addNewHog} />
      </div>

      {/* Filter and Sort options */}
      <FilterSort
        onToggleGreased={handleToggleGreased}
        onSortChange={handleSortChange}
      />

      {/* List of hogs */}
      <HogList hogs={sortedHogs} />
    </div>
  );
}

export default App;