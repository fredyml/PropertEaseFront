import React from 'react';
import './../../styles/propertyCard.css';

const PropertyCard = ({ property, onViewDetails }) => {
    return (
      <div className="card shadow-sm">
        <img
          src={property.image}
          className="card-img-top"
          alt={property.name || 'Property Image'}
        />
        <div className="card-body">
          <h5 className="card-title">{property.name}</h5>
          <p className="card-text">{property.address}</p>
          <p className="text-success fw-bold">${property.price}</p>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => onViewDetails(property.id)}
          >
            View Details
          </button>
        </div>
      </div>
    );
  };

export default PropertyCard;
