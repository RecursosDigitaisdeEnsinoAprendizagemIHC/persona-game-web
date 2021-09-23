import baseApi, { getHeader } from "./baseApi";

export const startStep = async (token, stepId) => {
  const config = { headers: getHeader(token) };
  const { data } = await baseApi.get(`/step/${stepId}/start`, config);
  return data;
};

export const checkStepAnswers = async (token, stepId, answers) => {
  const config = { headers: getHeader(token) };
  const payload = {
    stepId,
    answers,
  };

  const { data } = await baseApi.post("/step/finish", payload, config);
  return data;
};
