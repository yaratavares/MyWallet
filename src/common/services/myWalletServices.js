import axios from "axios";

const BASE_URL = "http://localhost:5000";

function userLogin(data) {
  const response = axios.post(`${BASE_URL}/auth/login`, data);

  return response;
}

function userRegistration(data) {
  const response = axios.post(`${BASE_URL}/auth/signup`, {
    name: data.name,
    password: data.password,
    email: data.email,
  });
  return response;
}

function getRegistry(token) {
  const response = axios.get(`${BASE_URL}/registers`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response;
}

function postNewRegistry(data, type, token) {
  const request = { ...data, ...type };
  delete request.name;
  console.log(request);
  const response = axios.post(`${BASE_URL}/registers`, request, {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(response);
  return response;
}

export { userLogin, userRegistration, postNewRegistry, getRegistry };
