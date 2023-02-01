import { getUserPreferences } from "../../services/preferences.service";

export const GET_ALL_PREFERENCES = "GET_ALL_PREFERENCES";
import { toast } from 'react-toastify';

export const loadUserPreferences = () => {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.userToken;
      const preferences = await getUserPreferences(token);
      dispatch({ type: GET_ALL_PREFERENCES, preferences: preferences.preferenceTypes });
      dispatch({ type: 'SET_LOADING', isLoading: true });
      toast.success('Configurações carregadas com sucesso.');
    } catch (err) {
      const code = err?.response?.data?.error?.code ?? 500;
      const message = err?.response?.data?.error?.message ?? 'Erro ao buscar Configurações.';
      dispatch({ type: 'GET_ALL_PREFERENCES', phases:{code, message} });
    }
    setTimeout(() => {
      dispatch({ type: 'SET_LOADING', isLoading: false });
    }, 500);

  };
};
