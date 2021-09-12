import { checkQuestionAnswer } from "../../services/question.service";
import { startStep } from "../../services/step.service";

export const START_NEW_STEP = "START_NEW_STEP";
export const SET_QUESTION_ANSWER = "SET_QUESTION_ANSWER";

export const startNewStep = (stepId) => {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.userToken;
      const questions = await startStep(token, stepId);
      dispatch({ type: START_NEW_STEP, questions });
    } catch (err) {
      console.error(err);
      return Promise.reject(err);
    }
  };
};

export const setQuestionAnswer = (questionId, answerSent) => {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.userToken;
      // call api to get question answer
      const answer = await checkQuestionAnswer(token, questionId, answerSent);
      dispatch({ type: SET_QUESTION_ANSWER, questionId, answerSent, answer });
    } catch (err) {
      console.error(err);
      return Promise.reject(err);
    }
  };
};
