import { EDIT_PREFERENCES, GET_ALL_PREFERENCES } from "../actions/preferences.action";

const initialState = {
  preferences: [],
};

const preferenceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PREFERENCES: {
      state = {
        ...state,
        preferences: action.preferences,
      };
      break;
    }

    case EDIT_PREFERENCES: {
      const { preferenceId, value } = action;
      const preferencesClone = structuredClone(state.preferences)

      preferencesClone
        .find(pref => pref.id === preferenceId)
        .value = value

      state = {
        ...state,
        preferences: preferencesClone,
      };
      break;
    }

    default:
      break;
  }
  return state;
};

export default preferenceReducer;
