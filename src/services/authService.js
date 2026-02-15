import axios from "axios";
const API = "http://localhost:3000/users";

export const registerUser = async (data) => {
  console.log("user's data is available", data);
  const oldUser = await axios.get(`${API}/?email=${data.email}`);
  if (oldUser.data.length > 0) {
    throw new Error("user already exists");
  }
  const response = await axios.post(API, data);
  return response.data;
};

export const loginUser = async (email, password) => {
  console.log("purpose: login, user's data is available", email, password);
  const response = await axios.get(
    `${API}/?email=${email}&password=${password}`,
  );
  if (response.data.length === 0) {
    throw new Error("invalid");
  }
  return response.data[0];
};
