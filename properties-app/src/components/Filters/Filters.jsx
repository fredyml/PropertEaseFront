import React, { useState } from 'react';
import './../../styles/filters.css';

const Filters = ({ filters = {}, handleFilterChange }) => {
  const [localFilters, setLocalFilters] = useState({
    name: '',
    address: '',
    minPrice: '',
    maxPrice: ''
  });

  const [error, setError] = useState(''); // Estado para el mensaje de error
  const [isModalVisible, setModalVisible] = useState(false); // Estado para controlar la visibilidad de la modal

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Actualizar filtros locales
    setLocalFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));

    // Disparar el cambio solo en los campos "name" y "address"
    if (name === 'name' || name === 'address') {
      handleFilterChange({
        ...localFilters,
        [name]: value
      });
    }
  };

  const handleSearch = () => {
    const { minPrice, maxPrice } = localFilters;

    // Validar si solo uno de los campos tiene valor
    if ((minPrice && !maxPrice) || (!minPrice && maxPrice)) {
      setError('Debe ingresar valores tanto para el precio mínimo como para el precio máximo.');
      setModalVisible(true);
      return;
    }

    // Validar si el precio mínimo es mayor que el máximo
    if (minPrice && maxPrice && parseFloat(minPrice) > parseFloat(maxPrice)) {
      setError('El precio mínimo no puede ser mayor que el precio máximo.');
      setLocalFilters((prevFilters) => ({
        ...prevFilters,
        maxPrice: '' // Limpiar el campo maxPrice
      }));
      setModalVisible(true);
      return;
    }

    // Si todo está bien, aplicar los filtros
    setError('');
    setModalVisible(false);
    handleFilterChange(localFilters);
  };

  const handleCloseModal = () => {
    setModalVisible(false); // Ocultar la modal
  };

  return (
    <div>
      <div className="filters d-flex justify-content-between align-items-center p-3 bg-light rounded shadow-sm">
        {/* Campo de texto: Nombre */}
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search by name"
          value={localFilters.name}
          name="name"
          onChange={handleInputChange}
        />
        {/* Campo de texto: Dirección */}
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search by address"
          value={localFilters.address}
          name="address"
          onChange={handleInputChange}
        />
        {/* Campo numérico: Precio mínimo */}
        <input
          type="number"
          className="form-control me-2"
          placeholder="Min price"
          value={localFilters.minPrice}
          name="minPrice"
          onChange={handleInputChange}
        />
        {/* Campo numérico: Precio máximo */}
        <input
          type="number"
          className="form-control me-2"
          placeholder="Max price"
          value={localFilters.maxPrice}
          name="maxPrice"
          onChange={handleInputChange}
        />
        {/* Botón Buscar */}
        <button className="btn btn-primary" onClick={handleSearch}>
          Buscar
        </button>
      </div>

      {/* Modal para el mensaje de error */}
      {isModalVisible && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Error</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <p>{error}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
