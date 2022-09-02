import { getPhasesList } from "../../services/phase.service";

export const GET_ALL_PHASES = "GET_ALL_PHASES";
import { toast } from 'react-toastify';

export const getAllPhases = () => {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.userToken;
      const phases = await getPhasesList(token);
      dispatch({ type: GET_ALL_PHASES, phases });
      toast.success('Fases carregadas com sucesso.');
    } catch (err) {
      toast.error(err?.response?.data?.error?.message);
      return Promise.reject(err);
    }
  };
};
