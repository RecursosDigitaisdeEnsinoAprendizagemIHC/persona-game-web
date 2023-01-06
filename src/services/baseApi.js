import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000",
});

export const getHeader = (token) => {
  return {
    Authorization: `Bearer ${token}`,
  };
};
