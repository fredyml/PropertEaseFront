import React, { useState } from 'react';
import './../../styles/filters.css';

const Filters = ({ filters = {}, handleFilterChange, handleSearch }) => {
    return (
      <div className="filters d-flex justify-content-between align-items-center p-3 bg-light rounded shadow-sm">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search by name"
          value={filters.name || ''}
          onChange={(e) => handleFilterChange('name', e.target.value)}
        />
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search by address"
          value={filters.address || ''}
          onChange={(e) => handleFilterChange('address', e.target.value)}
        />
        <input
          type="number"
          className="form-control me-2"
          placeholder="Min price"
          value={filters.minPrice || ''}
          onChange={(e) => handleFilterChange('minPrice', e.target.value)}
        />
        <input
          type="number"
          className="form-control me-2"
          placeholder="Max price"
          value={filters.maxPrice || ''}
          onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
    );
  };
  
  export default Filters;
  
