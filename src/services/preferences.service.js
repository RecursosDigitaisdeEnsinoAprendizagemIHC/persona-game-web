import baseApi, { getHeader } from "./baseApi";

export const getUserPreferences = async (token) => {
  const config = { headers: getHeader(token) };
  const { data } = await baseApi.get(
    `/preferences`,
    config
  );
  return data;
};
