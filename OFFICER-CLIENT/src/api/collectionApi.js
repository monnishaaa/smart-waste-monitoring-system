import axios from "axios";

const API = "https://smart-waste-monitoring-system.onrender.com/api/collections";

// Save Collection
export const addCollection = (data) => {
  return axios.post(API, data);
};

// Get Collection History
export const getCollections = (householdId) => {
  return axios.get(`${API}/${householdId}`);
};