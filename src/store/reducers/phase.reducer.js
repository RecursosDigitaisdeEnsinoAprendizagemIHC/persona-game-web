import { GET_ALL_PHASES } from "../actions/phase.action";

const initialStete = {
  phases: [],
};

const phaseReducer = (state = initialStete, action) => {
  switch (action.type) {
    case GET_ALL_PHASES:
      state = {
        ...state,
        phases: action.phases,
      };
    default:
      break;
  }
  return state;
};

export default phaseReducer;
