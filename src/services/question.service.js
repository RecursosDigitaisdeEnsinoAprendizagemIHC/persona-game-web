import baseApi, { getHeader } from "./baseApi";

export const checkQuestionAnswer = async (token, questionId, answer) => {
  const config = { headers: getHeader(token) };
  const { data } = await baseApi.get(
    `/question/${questionId}/check?answer=${answer}`,
    config
  );
  return data;
};
