import baseApi, { getHeader } from "./baseApi";

export const getUserPreferences = async (token) => {
  const config = { headers: getHeader(token) };
  const { data } = await baseApi.get(
    `/preferences`,
    config
  );
  return data;
};

export const editUserPreferences = async (token, preferenceId, value) => {
  const config = { headers: getHeader(token) };
  const payload = {
    value
  };

  const { data } = await baseApi.put(
    `/preference_type/${preferenceId}`,
    payload,
    config
  );
  return data;
};

export const updateFontSize = (value) => {
  document.querySelector('html').style.fontSize = `${value * 100}%`
};