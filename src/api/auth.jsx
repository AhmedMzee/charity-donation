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

export const getUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/users/register`, userData);
  return response.data;
};

export const updateUser = async (id, userData) => {
  const response = await axios.put(`${API_BASE_URL}/users/${id}`, userData);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/users/${id}`);
  return response.data;
};

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to fetch users";
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

// ------------------ PROJECTS ------------------
export const fetchProjects = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/projects`);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to fetch projects";
  }
};

export const createProject = async (projectData) => {
  const response = await axios.post(`${API_BASE_URL}/projects`, projectData);
  return response.data;
};
export const updateProject = async (id, projectData) => {
  const response = await axios.put(`${API_BASE_URL}/projects/${id}`, projectData);
  return response.data;
};
export const deleteProject = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/projects/${id}`);
  return response.data;
};

// BENEFICIARY ../api/beneficiaries"
export const fetchBeneficiaries = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/beneficiaries`);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to fetch beneficiaries";
  }
};

export const createBeneficiary = async (beneficiaryData, projectId, addedById) => {
  const response = await axios.post(
    `${API_BASE_URL}/beneficiaries?projectId=${projectId}&addedById=${addedById}`,
    beneficiaryData
  );
  return response.data;
};

export const updateBeneficiary = async (id, beneficiaryData) => {
  const response = await axios.put(`${API_BASE_URL}/beneficiaries/${id}`, beneficiaryData);
  return response.data;
};
export const deleteBeneficiary = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/beneficiaries/${id}`);
  return response.data;
};

