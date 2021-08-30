import axios from "axios";

export default axios.create({
  baseURL: process.env.BACKEND_ENDPOINT,
});

export const getHeader = (token) => {
  return {
    Authorization: `Bearer ${token}`,
  };
};
