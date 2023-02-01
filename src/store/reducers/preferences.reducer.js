import { GET_ALL_PREFERENCES } from "../actions/preferences.action";

const initialStete = {
  preferences: [],
};

const preferenceReducer = (state = initialStete, action) => {
  switch (action.type) {
    case GET_ALL_PREFERENCES: {
      state = {
        ...state,
        preferences: action.preferences,
      };
      break;
    }
    default:
      break;
  }
  return state;
};

export default preferenceReducer;
