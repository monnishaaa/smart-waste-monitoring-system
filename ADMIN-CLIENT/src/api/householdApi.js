import axios from "axios";

const API = axios.create({
  baseURL: "https://smart-waste-monitoring-system.onrender.com/api",
});

export const getHouseholds = () => API.get("/households");

export const addHousehold = (data) => API.post("/households", data);

export const updateHousehold = (id, data) =>
  API.put(`/households/${id}`, data);

export const deleteHousehold = (id) =>
  API.delete(`/households/${id}`);