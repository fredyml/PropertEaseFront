import React from 'react';
import './../../styles/propertyDetails.css';

const PropertyDetails = ({ property, onClose }) => {
  if (!property) return null;

  const { owner, images, traces } = property;

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
            <p><strong>Year:</strong> {property.year}</p>
            <p><strong>Internal Code:</strong> {property.codeInternal}</p>
            <p><strong>Description:</strong> {property.description || "No description available"}</p>

            {/* Información del propietario */}
            <div className="owner-info">
              <h6>Owner Information:</h6>
              <p><strong>Name:</strong> {owner.name}</p>
              <p><strong>Address:</strong> {owner.address}</p>
              <p><strong>Birthday:</strong> {new Date(owner.birthday).toLocaleDateString()}</p>
              
            </div>

            {/* Imágenes de la propiedad */}
            <div className="property-images">
              <h6>Property Images:</h6>
              {images && images.length > 0 ? (
                images.map((image, index) =>
                  image.enabled ? (
                    <img
                      key={index}
                      src={image.file}
                      alt={`Property Image ${index + 1}`}
                      style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
                    />
                  ) : null
                )
              ) : (
                <p>No images available</p>
              )}
            </div>

            {/* Trazas de venta */}
            <div className="property-traces">
              <h6>Sale History:</h6>
              {traces && traces.length > 0 ? (
                traces.map((trace, index) => (
                  <div key={index}>
                    <p><strong>Date of Sale:</strong> {new Date(trace.dateSale).toLocaleDateString()}</p>
                    <p><strong>Sale Price:</strong> ${trace.value}</p>
                    <p><strong>Tax:</strong> ${trace.tax}</p>
                  </div>
                ))
              ) : (
                <p>No sale history available</p>
              )}
            </div>
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
