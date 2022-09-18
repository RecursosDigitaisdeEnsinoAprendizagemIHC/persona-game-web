import { checkQuestionAnswer } from "../../services/question.service";
import { startStep, checkStepAnswers } from "../../services/step.service";
import { toast } from 'react-toastify';

export const START_NEW_STEP = "START_NEW_STEP";
export const SET_QUESTION_ANSWER = "SET_QUESTION_ANSWER";
export const FINISH_STEP = "FINISH_STEP";
export const FAIL_STEP = "FAIL_STEP";
export const CLEAR_FINISH_STEP = "CLEAR_FINISH_STEP";

export const startNewStep = (stepId) => {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.userToken;
      const questions = await startStep(token, stepId);
      dispatch({ type: START_NEW_STEP, questions });
      toast.success('Questionario iniciado.');
    } catch (err) {
      const code = err?.response?.data?.error?.code ?? 500;
      const message = err?.response?.data?.error?.message ?? 'Erro ao iniciar passo.';
      dispatch({ type: 'CHECK_ERROR', error:{code, message} });
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
      const code = err?.response?.data?.error?.code ?? 500;
      const message = err?.response?.data?.error?.message ?? 'Erro ao checar resposta.';
      // dispatch({ type: SET_QUESTION_ANSWER, questionId, answerSent, error: {code, message} });
      dispatch({ type: 'CHECK_ERROR', error:{code, message} });
    }
  };
};

export const finishStep = (stepId) => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const answers = extractAnswersSent(state);
      const token = state.user.userToken;
      const stepResult = await checkStepAnswers(token, stepId, answers);
      dispatch({ type: FINISH_STEP, stepId, stepResult });
    } catch (err) {
      const code = err?.response?.data?.error?.code ?? 500;
      const message = err?.response?.data?.error?.message ?? 'Erro ao buscar recompensas.';
      dispatch({ type: 'CHECK_ERROR', error:{code, message} });
    }
  };
};

const extractAnswersSent = (state) => {
  const answers = [];
  for (let item of state.step.answeredQuestions) {
    const { questionId, answerSent } = item;
    answers.push({
      questionId,
      optionAnswer: answerSent,
    });
  }
  return answers;
};

export const failStep = (reason) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FAIL_STEP, reason });
      dispatch({ type: 'SET_LOADING', isLoading: true });
    } catch (err) {
      return Promise.reject(err);
    }
    setTimeout(() => { 
      dispatch({ type: 'SET_LOADING', isLoading: false });
    }, 500);
  };
};

export const clearFinishedStep = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: CLEAR_FINISH_STEP });
      dispatch({ type: 'SET_LOADING', isLoading: true });
    } catch (err) {
      console.error(err);
      return Promise.reject(err);
    }
    setTimeout(() => { 
      dispatch({ type: 'SET_LOADING', isLoading: false });
    }, 500);
  };
};
