import React from 'react';

const SearchAndFilter = ({ searchTerm, setSearchTerm, riskFilter, setRiskFilter }) => {
  return (
    <div className="search-filter">
      <div className="search-filter__search">
        <input
          type="text"
          placeholder="Search merchants by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-filter__input"
        />
      </div>
      <div className="search-filter__filter">
        <label htmlFor="risk-filter" className="search-filter__label">
          Filter by Risk:
        </label>
        <select
          id="risk-filter"
          value={riskFilter}
          onChange={(e) => setRiskFilter(e.target.value)}
          className="search-filter__select"
        >
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
    </div>
  );
};

export default SearchAndFilter;
