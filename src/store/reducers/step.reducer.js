import { START_NEW_STEP, SET_QUESTION_ANSWER } from "../actions/step.action";

const initialStete = {
  questions: [],
  answeredQuestions: [],
};

const stepReducer = (state = initialStete, action) => {
  switch (action.type) {
    case START_NEW_STEP:
      state = {
        ...state,
        questions: action.questions,
      };
      break;
    case SET_QUESTION_ANSWER:
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
    default:
      break;
  }
  return state;
};

export default stepReducer;
