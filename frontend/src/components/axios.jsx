import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/"; // Update this if your backend runs on a different URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true, // Include cookies if needed for authentication
});

export default api;