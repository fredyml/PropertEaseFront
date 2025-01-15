import React from 'react';
import PropertyCard from '../PropertyCard/PropertyCard';
import './../../styles/propertyGrid.css';

const PropertyGrid = ({ properties, onViewDetails }) => {
    return (
      <div className="container mt-4">
        <div className="row">
          {properties.map((property) => (
            <div className="col-md-4 mb-4" key={property.id}>
              <PropertyCard property={property} onViewDetails={onViewDetails} />
            </div>
          ))}
        </div>
      </div>
    );
  };

export default PropertyGrid;
