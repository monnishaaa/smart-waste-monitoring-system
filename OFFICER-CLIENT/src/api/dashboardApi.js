import axios from "axios";

const API = axios.create({
  baseURL: "https://smart-waste-monitoring-system.onrender.com/api",
});

export const getDashboardData = (ward = "All Wards") =>
  API.get("/dashboard", {
    params: { ward },
  });