import React, { useState, useEffect } from 'react';
import PropertyCard from '../PropertyCard/PropertyCard';
import './../../styles/propertyGrid.css';
import { getProperties } from '../../services/propertyService';

const PropertyGrid = ({ filters }) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await getProperties(filters);  
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, [filters]); 

  return (
    <div className="property-grid">
      {properties.length > 0 ? (
        properties.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))
      ) : (
        <p>Loading properties...</p>
      )}
    </div>
  );
};

export default PropertyGrid;
