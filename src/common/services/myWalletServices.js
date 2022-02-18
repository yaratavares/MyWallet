import axios from "axios";

// const BASE_URL = "https://backendmy-wallet.herokuapp.com";
const BASE_URL = "http://localhost:5000";

function configToken(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function userLogin(data) {
  return axios.post(`${BASE_URL}/auth/login`, data);
}

function userRegistration(data) {
  return axios.post(`${BASE_URL}/auth/signup`, {
    name: data.name,
    password: data.password,
    email: data.email,
  });
}

function getRegistry(token) {
  return axios.get(`${BASE_URL}/registers`, configToken(token));
}

function postNewRegistry(data, type, token) {
  const request = { ...data, ...type };
  delete request.name;
  return axios.post(`${BASE_URL}/registers`, request, configToken(token));
}

function deleteRegistry(id, token) {
  return axios.delete(`${BASE_URL}/registers/${id}`, configToken(token));
}

function editRegistry(id, data, token) {
  return axios.put(`${BASE_URL}/registers/${id}`, configToken(token));
}

export {
  userLogin,
  userRegistration,
  postNewRegistry,
  getRegistry,
  deleteRegistry,
  editRegistry,
};
