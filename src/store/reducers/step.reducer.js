import {
  START_NEW_STEP,
  SET_QUESTION_ANSWER,
  FINISH_STEP,
  FAIL_STEP,
  CLEAR_FINISH_STEP,
} from "../actions/step.action";

const initialStete = {
  questions: [],
  answeredQuestions: [],
  finishedStep: null,
};

const stepReducer = (state = initialStete, action) => {
  switch (action.type) {
    case START_NEW_STEP:
      state = {
        ...state,
        questions: action.questions,
      };
      break;
    case SET_QUESTION_ANSWER: {
      const questionAnswer = {
        questionId: action.questionId,
        answerSent: action.answerSent,
        answer: action.answer,
      };
      const alreadySaved = state.answeredQuestions.find(
        (item) => item.questionId === questionAnswer.questionId
      );
      if (alreadySaved) break;
      state = {
        ...state,
        answeredQuestions: [...state.answeredQuestions, questionAnswer],
      };
      break;
    }
    case FINISH_STEP:
      state = {
        ...state,
        finishedStep: {
          success: action.stepResult.success,
          rewards: action.stepResult.rewards,
        },
        answeredQuestions: [],
      };
      break;
    case FAIL_STEP:
      state = {
        ...state,
        finishedStep: {
          success: false,
          reason: action.reason,
        },
        answeredQuestions: [],
      };
      break;
    case CLEAR_FINISH_STEP:
      state = {
        ...state,
        finishedStep: null,
        questions: [],
      };
      break;
    default:
      break;
  }
  return state;
};

export default stepReducer;
