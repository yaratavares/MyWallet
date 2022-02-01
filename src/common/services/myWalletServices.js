import axios from "axios";

const BASE_URL = "http://localhost:5000";

function userLogin(data) {
  const response = axios.post(`${BASE_URL}/auth/login`, data);
  return response;
}

export { userLogin };
