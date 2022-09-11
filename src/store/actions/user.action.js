import { authenticate } from "../../services/auth.service";
import { toast } from 'react-toastify';

export const ADD_USER_TOKEN = "ADD_USER_TOKEN";

export const addUserToken = () => {
  return async (dispatch) => {
    try {
      const token = await authenticate();
      dispatch({ type: ADD_USER_TOKEN, token });
      dispatch({ type: 'SET_LOADING', isLoading: true });
    } catch (err) {
      toast.error(err?.response?.data?.error?.message);
      return Promise.reject(err);
    }
    setTimeout(() => { 
      dispatch({ type: 'SET_LOADING', isLoading: false });
    }, 500);
  };
};
