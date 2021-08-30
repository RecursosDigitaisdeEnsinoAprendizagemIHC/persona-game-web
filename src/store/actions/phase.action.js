import { getPhasesList } from "../../services/phase.service";

export const GET_ALL_PHASES = "GET_ALL_PHASES";

export const getAllPhases = () => {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.userToken;
      const phases = await getPhasesList(token);
      dispatch({ type: GET_ALL_PHASES, phases });
    } catch (err) {
      console.error(err);
      return Promise.reject(err);
    }
  };
};
