import axios from "axios";

const API = "http://localhost:3001/users";

export const updateUser = async (id, data) => {
  const res = await axios.patch(`${API}/${id}`, data);
  return res.data;
};
