import { authenticate } from "../../services/auth.service";

export const ADD_USER_TOKEN = "ADD_USER_TOKEN";

export const addUserToken = () => {
  return async (dispatch) => {
    try {
      const token = await authenticate();
      dispatch({ type: ADD_USER_TOKEN, token });
      dispatch({ type: 'SET_LOADING', isLoading: true });
    } catch (err) {
      const code = err?.response?.data?.error?.code ?? 500;
      const message = err?.response?.data?.error?.message ?? 'Erro ao autenticar.';
      dispatch({ type: ADD_USER_TOKEN, token:{code, message} });
    }
    setTimeout(() => { 
      dispatch({ type: 'SET_LOADING', isLoading: false });
    }, 500);
  };
};
