import { ADD_USER_TOKEN } from "../actions/user.action";

const initialStete = {
  userToken: "",
};

const userReducer = (state = initialStete, action) => {
  switch (action.type) {
    case ADD_USER_TOKEN:
      state = {
        ...state,
        userToken: action.token,
      };
      break;
    default:
      break;
  }
  return state;
};

export default userReducer;
