import React, { useEffect, useState } from 'react';
import { getPropertyById } from '../../services/propertyService';
import './../../styles/propertyDetails.css';

const PropertyDetails = ({ property, onClose }) => {
    if (!property) return null;
  
    return (
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{property.name}</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <p><strong>Address:</strong> {property.address}</p>
              <p><strong>Price:</strong> ${property.price}</p>
              <p><strong>Description:</strong> {property.description}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default PropertyDetails;
