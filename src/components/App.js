import React, { useState } from "react";
import hogsData from "../porkers_data"; 
import HogList from "./HogList";
import FilterSort from "./FilterSort";
import HogForm from "./HogForm";

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
    <div className="App" style={{ position: "relative", padding: "20px" }}>
    
      <div style={{ marginBottom: "20px" }}>
        <h2>Add a New Hog</h2>
        <HogForm addNewHog={addNewHog} />
      </div>

      
      <FilterSort
        onToggleGreased={handleToggleGreased}
        onSortChange={handleSortChange}
      />

    
      <HogList hogs={sortedHogs} />
    </div>
  );
}

export default App;