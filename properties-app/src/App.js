import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7179/api/properties?",
          {
            
          }
        );
        setProperties(response.data);
      } catch (err) {
        setError("Error al cargar los datos.");
        console.error(err);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="reservations-container">
      <h1>Propiedades Disponibles</h1>
      {error && <div className="error-container">{error}</div>}
      <div className="table-wrapper">
        <table className="reservations-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Dirección</th>
              <th>Precio</th>
              <th>Año</th>
              <th>Imágenes</th>
              <th>Propietario</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property, index) => (
              <tr key={index}>
                <td>{property.name}</td>
                <td>{property.address}</td>
                <td>${property.price.toLocaleString()}</td>
                <td>{property.year}</td>
                <td>
                  {property.images.map(
                    (img, i) =>
                      img.enabled && (
                        <img
                          key={i}
                          src={img.file}
                          alt={`Property ${i}`}
                          style={{ width: "50px", marginRight: "5px" }}
                        />
                      )
                  )}
                </td>
                <td>
                  <div>
                    <strong>{property.owner.name}</strong>
                    <p>{property.owner.address}</p>
                    <img
                      src={property.owner.photo}
                      alt={property.owner.name}
                      style={{ width: "50px", borderRadius: "50%" }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
