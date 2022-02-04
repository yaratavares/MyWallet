import axios from "axios";

const BASE_URL = "http://localhost:5000";

function userLogin(data) {
  const response = { data: { ...data, token: "465423165743132" } };
  // const response = axios.post(`${BASE_URL}/auth/login`, data);
  return response.data.token;
}

function userRegistration(data) {
  const response = { data: { ...data } };
  // const response = axios.post(`${BASE_URL}/auth/sign-up`, data);
  return response.data;
}

export { userLogin, userRegistration };
