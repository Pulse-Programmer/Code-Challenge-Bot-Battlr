import { useState } from "react";

function SortBar({ onSort, onFilter }) {
  const [sortBy, setSortBy] = useState(""); // To track sorting criteria
  const [filterBy, setFilterBy] = useState(""); // To track filtering criteria

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortBy(value); // Update sortBy state
    onSort(value); // Pass sorting criteria to parent component
  };

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilterBy(value); // Update filterBy state
    onFilter(value); // Pass filtering criteria to parent component
  };

  return (
    <div className="sort-bar">
      {/* Sorting options */}
      <label htmlFor="sort-select">Sort By: </label>
      <select id="sort-select" value={sortBy} onChange={handleSortChange}>
        <option value="">None</option>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>

      {/* Filtering options */}
      <label htmlFor="filter-select">Filter By Class: </label>
      <select id="filter-select" value={filterBy} onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="Support">Support</option>
        <option value="Medic">Medic</option>
        <option value="Witch">Witch</option>
        <option value="Defender">Defender</option>
      </select>
    </div>
  );
}

export default SortBar;
