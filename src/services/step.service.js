import baseApi, { getHeader } from "./baseApi";

export const startStep = async (token, stepId) => {
  const config = { headers: getHeader(token) };
  const { data } = await baseApi.get(`/step/${stepId}/start`, config);
  return data;
};
