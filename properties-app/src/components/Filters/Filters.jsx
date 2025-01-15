import React, { useState } from 'react';
import './../../styles/filters.css';

const Filters = ({ filters = {}, handleFilterChange, handleSearch }) => {
  const [localFilters, setLocalFilters] = useState({
    name: '',
    address: '',
    minPrice: '',
    maxPrice: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));

    // Llamamos a handleFilterChange con los filtros actualizados
    handleFilterChange({
      ...localFilters,
      [name]: value
    });
  };

  return (
    <div className="filters d-flex justify-content-between align-items-center p-3 bg-light rounded shadow-sm">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Search by name"
        value={filters.name || ''}
        name="name"
        onChange={handleInputChange}
      />
      <input
        type="text"
        className="form-control me-2"
        placeholder="Search by address"
        value={filters.address || ''}
        name="address"
        onChange={handleInputChange}
      />
      <input
        type="number"
        className="form-control me-2"
        placeholder="Min price"
        value={filters.minPrice || ''}
        name="minPrice"
        onChange={handleInputChange}
      />
      <input
        type="number"
        className="form-control me-2"
        placeholder="Max price"
        value={filters.maxPrice || ''}
        name="maxPrice"
        onChange={handleInputChange}
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Filters;
