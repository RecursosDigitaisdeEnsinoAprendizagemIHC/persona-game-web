import { getPhasesList } from "../../services/phase.service";

export const GET_ALL_PHASES = "GET_ALL_PHASES";
import { toast } from 'react-toastify';

export const getAllPhases = () => {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.userToken;
      const phases = await getPhasesList(token);
      dispatch({ type: GET_ALL_PHASES, phases });
      dispatch({ type: 'SET_LOADING', isLoading: true });
      toast.success('Fases carregadas com sucesso.');
    } catch (err) {
      const code = err?.response?.data?.error?.code ?? 500;
      const message = err?.response?.data?.error?.message ?? 'Erro ao buscar Fases.';
      dispatch({ type: 'GET_ALL_PHASES', phases:{code, message} });
    }
    setTimeout(() => { 
      dispatch({ type: 'SET_LOADING', isLoading: false });
    }, 500);
  
  };
};
