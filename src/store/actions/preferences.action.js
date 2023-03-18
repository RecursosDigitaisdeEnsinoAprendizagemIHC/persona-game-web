import { toast } from 'react-toastify';

import { editUserPreferences, getUserPreferences } from "../../services/preferences.service";

export const GET_ALL_PREFERENCES = "GET_ALL_PREFERENCES";
export const EDIT_PREFERENCES = "EDIT_PREFERENCES";

export const loadUserPreferences = (userToken) => {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.userToken || userToken;

      console.log(token)
      const preferences = await getUserPreferences(token);
      dispatch({ type: GET_ALL_PREFERENCES, preferences: preferences.preferenceTypes });
      dispatch({ type: 'SET_LOADING', isLoading: true });
      toast.success('Configurações carregadas com sucesso.');
    } catch (err) {
      const code = err?.response?.data?.error?.code ?? 500;
      const message = err?.response?.data?.error?.message ?? 'Erro ao buscar configurações.';
      dispatch({ type: 'GET_ALL_PREFERENCES', phases:{code, message} });
    }
    setTimeout(() => {
      dispatch({ type: 'SET_LOADING', isLoading: false });
    }, 500);

  };
};

export const updateUserPreferences = (preferenceId, value) => {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.userToken;
      await editUserPreferences(token, preferenceId, value);
      dispatch({ type: EDIT_PREFERENCES, preferenceId, value});
    } catch (err) {
      const code = err?.response?.data?.error?.code ?? 500;
      const message = err?.response?.data?.error?.message ?? 'Erro ao alterar configuração.';
      dispatch({ type: 'CHECK_ERROR', error:{code, message} });
    }
  };
};