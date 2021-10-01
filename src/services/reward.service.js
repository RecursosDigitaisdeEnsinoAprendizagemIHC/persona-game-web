import baseApi, { getHeader } from "./baseApi";

export const getRewardList = async (token) => {
  const config = { headers: getHeader(token) };
  const { data } = await baseApi.get("/rewards", config);
  return data;
};

export const getMyRewards = async (token) => {
  const config = { headers: getHeader(token) };
  const { data } = await baseApi.get("/my_rewards", config);
  return data;
};
