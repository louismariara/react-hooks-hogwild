import React, { useState } from "react";
import hogsData from "../porkers_data"; // data from porkers_data.js
import HogList from "./HogList";
import FilterSort from "./FilterSort";
import AddHogForm from "./AddHogForm";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [showGreased, setShowGreased] = useState(false);
  const [sortBy, setSortBy] = useState("name");

  const handleToggleGreased = () => setShowGreased((prev) => !prev);

  const handleSortChange = (criteria) => setSortBy(criteria);

  const addNewHog = (newHog) => {
    setHogs((prevHogs) => [...prevHogs, newHog]);
  };

  const filteredHogs = hogs.filter((hog) =>
    showGreased ? hog.greased : true
  );

  const sortedHogs = [...filteredHogs].sort((a, b) =>
    a[sortBy] > b[sortBy] ? 1 : -1
  );

  return (
    <div className="App"style={{position: "relative"}}>
      <FilterSort
        onToggleGreased={handleToggleGreased}
        onSortChange={handleSortChange}
      />
      <HogList hogs={sortedHogs} />
      <AddHogForm addNewHog={addNewHog} />
    </div>
  );
}

export default App;