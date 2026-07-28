import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getDashboardData = (ward = "All Wards") =>
  API.get("/dashboard", {
    params: { ward },
  });