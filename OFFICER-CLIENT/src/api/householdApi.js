import axios from "axios";

const API = "http://localhost:5000/api/households";

// Get all households
export const getHouseholds = () => {
  return axios.get(API);
};

// Get one household by MongoDB _id
export const getHouseholdById = (id) => {
  return axios.get(`${API}/${id}`);
};

// Add household
export const addHousehold = (data) => {
  return axios.post(API, data);
};

// Update household
export const updateHousehold = (id, data) => {
  return axios.put(`${API}/${id}`, data);
};

// Delete household
export const deleteHousehold = (id) => {
  return axios.delete(`${API}/${id}`);
};