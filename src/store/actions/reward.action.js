import { getRewardList, getMyRewards } from "../../services/reward.service";
import { toast } from 'react-toastify';

export const GET_ALL_REWARDS = "GET_ALL_REWARDS";
export const GET_USER_REWARDS = "GET_USER_REWARDS";

export const getAllRewards = () => {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.userToken;
      const rewards = await getRewardList(token);
      dispatch({ type: GET_ALL_REWARDS, rewards });
      dispatch({ type: 'SET_LOADING', isLoading: true });
      toast.success('Lista Recompensas carregadas com sucesso');
    } catch (err) {
      toast.error(err?.response?.data?.error?.message);
      return Promise.reject(err);
    }
    setTimeout(() => { 
      dispatch({ type: 'SET_LOADING', isLoading: false });
    }, 500);
  };
};

export const getUserRewards = () => {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.userToken;
      const userRewards = await getMyRewards(token);
      dispatch({ type: GET_USER_REWARDS, userRewards });
      dispatch({ type: 'SET_LOADING', isLoading: true });
      toast.success('Recompensas carregadas com sucesso');
    } catch (err) {
      toast.error(err?.response?.data?.error?.message);
      return Promise.reject(err);
    }
    setTimeout(() => { 
      dispatch({ type: 'SET_LOADING', isLoading: false });
    }, 500);
  };
};
