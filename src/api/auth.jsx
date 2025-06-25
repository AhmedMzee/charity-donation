import axios from "axios";
import { API_BASE_URL } from "./config";

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || "Login failed";
  }
};

export const getAdminSummary = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/admin/summary`);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to load summary";
  }
};

