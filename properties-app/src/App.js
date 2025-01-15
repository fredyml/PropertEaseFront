import React, { useState } from 'react';
import Filters from './components/Filters/Filters';
import PropertyGrid from './components/PropertyGrid/PropertyGrid';

const App = () => {
  const [filters, setFilters] = useState({
    name: '',
    address: '',
    minPrice: '',
    maxPrice: ''
  });

  // Manejar cambios en los filtros
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Manejar la búsqueda de propiedades
  const handleSearch = () => {
    console.log('Buscando propiedades con filtros:', filters);
  };

  return (
    <div className="App">
      <Filters filters={filters} handleFilterChange={handleFilterChange} handleSearch={handleSearch} />
      <PropertyGrid filters={filters} />  {/* Pasar los filtros a PropertyGrid */}
    </div>
  );
};

export default App;
