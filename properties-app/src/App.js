import React, { useState, useEffect } from 'react';
import { getProperties } from './services/propertyService';
import Filters from './components/Filters/Filters';
import PropertyGrid from './components/PropertyGrid/PropertyGrid';
import PropertyDetails from './components/PropertyDetails/PropertyDetails';

const App = () => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const fetchProperties = (filters) => {
    getProperties(filters).then((response) => setProperties(response.data));
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div>
      <Filters onFilter={fetchProperties} />
      <PropertyGrid properties={properties} onViewDetails={setSelectedProperty} />
      {selectedProperty && (
        <PropertyDetails propertyId={selectedProperty} onClose={() => setSelectedProperty(null)} />
      )}
    </div>
  );
};

export default App;
