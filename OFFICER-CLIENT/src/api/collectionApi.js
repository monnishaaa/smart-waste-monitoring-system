import axios from "axios";

const API = "http://localhost:5000/api/collections";

// Save Collection
export const addCollection = (data) => {
  return axios.post(API, data);
};

// Get Collection History
export const getCollections = (householdId) => {
  return axios.get(`${API}/${householdId}`);
};