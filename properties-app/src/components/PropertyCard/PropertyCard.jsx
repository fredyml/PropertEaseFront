import React from 'react';
import './../../styles/propertyCard.css';

const PropertyCard = ({ property }) => {
    return (
      <div className="property-card">
        <h2>{property.name}</h2>
        <p>{property.address}</p>
        <p><strong>Price:</strong> ${property.price}</p>
        <p><strong>Code Internal:</strong> {property.codeInternal}</p>
        <p><strong>Year:</strong> {property.year}</p>
  
        <div className="property-images">
          {property.images && property.images.length > 0 ? (
            property.images.map((image, index) =>
              image.enabled ? (
                <img
                  key={index}
                  src={image.file}
                  alt={`Property Image ${index + 1}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    marginBottom: '10px',
                  }}
                />
              ) : null
            )
          ) : (
            <p>No images available</p>
          )}
        </div>
      </div>
    );
  };

export default PropertyCard;
