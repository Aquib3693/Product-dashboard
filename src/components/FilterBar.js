import React from 'react';

const FilterBar = ({ categories, onFilter, onSort }) => {
  return (
    <div className="filter-bar">
      <select onChange={(e) => onFilter(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <button onClick={() => onSort('asc')}>Sort by Price ↑</button>
      <button onClick={() => onSort('desc')}>Sort by Price ↓</button>
    </div>
  );
};

export default FilterBar;
