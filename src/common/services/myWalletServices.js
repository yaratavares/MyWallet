import axios from "axios";

const BASE_URL = "http://localhost:5000";

function userLogin(data) {
  console.log(data);
  const response = axios.post(`${BASE_URL}/auth/login`, data);

  return response;
}

function userRegistration(data) {
  const response = axios.post(`${BASE_URL}/auth/signup`, {
    name: data.name,
    password: data.password,
    email: data.email,
  });
  console.log(response);
  return response;
}

function postNewRegistry(data) {
  const response = { data: { ...data } };
  // const response = axios.post(`${BASE_URL}/auth/sign-up`, data, header);
  return response.data;
}

export { userLogin, userRegistration, postNewRegistry };
