import axios from 'axios';

const API_BASE_URL = "https://localhost:7179/api";

export const getProperties = (filters = {}) => {
  return axios.get(`${API_BASE_URL}/properties`, { params: filters });
};

export const getPropertyById = (id) => {
  return axios.get(`${API_BASE_URL}/properties/${id}`);
};
