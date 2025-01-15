import axios from 'axios';

// La URL base de la API
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Función para obtener propiedades basadas en los filtros
export const getProperties = (filters = {}) =>
  axios.get(`${API_BASE_URL}/properties`, { params: filters });

// Función para obtener una propiedad por su ID
export const getPropertyById = (id) =>
  axios.get(`${API_BASE_URL}/properties/${id}`);
