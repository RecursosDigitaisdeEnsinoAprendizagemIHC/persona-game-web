import { GET_ALL_REWARDS, GET_USER_REWARDS } from "../actions/reward.action";

const initialStete = {
  rewards: [],
  userRewards: [],
};

const rewardReducer = (state = initialStete, action) => {
  switch (action.type) {
    case GET_ALL_REWARDS:
      state = {
        ...state,
        rewards: action.rewards,
      };
      break;
    case GET_USER_REWARDS:
      state = {
        ...state,
        userRewards: action.userRewards,
      };
      break;
    default:
      break;
  }
  return state;
};

export default rewardReducer;
