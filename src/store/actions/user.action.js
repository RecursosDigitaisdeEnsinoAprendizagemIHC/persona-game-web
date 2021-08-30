import { authenticate } from "../../services/auth.service";

export const ADD_USER_TOKEN = "ADD_USER_TOKEN";

export const addUserToken = () => {
  return async (dispatch) => {
    try {
      const token = await authenticate();
      dispatch({ type: ADD_USER_TOKEN, token });
    } catch (err) {
      return Promise.reject(err);
    }
  };
};
