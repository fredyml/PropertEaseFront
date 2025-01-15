import React, { useState, useEffect } from 'react';
import PropertyCard from '../PropertyCard/PropertyCard';
import './../../styles/propertyGrid.css';
import { getProperties } from '../../services/propertyService';
import PropertyDetails from '../PropertyDetails/PropertyDetails';

const PropertyGrid = ({ filters }) => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);  // Track the selected property for the modal

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

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);  // Set the selected property when a card is clicked
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);  // Close the modal when the close button is clicked
  };

  return (
    <div>
      <div className="property-grid">
        {properties.length > 0 ? (
          properties.map((property, index) => (
            <PropertyCard key={index} property={property} onClick={handlePropertyClick} />
          ))
        ) : (
          <p>Loading properties...</p>
        )}
      </div>

      {/* Show PropertyDetails modal when a property is selected */}
      {selectedProperty && (
        <PropertyDetails property={selectedProperty} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default PropertyGrid;
