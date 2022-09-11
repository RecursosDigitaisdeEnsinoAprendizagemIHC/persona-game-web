const initialStete = {
  isLoading: false,
};

const loadingReducer = (state = initialStete, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      state = {
        isLoading: action.isLoading
      }
      break;
    default:
      break;
  }
  return state;
};

export default loadingReducer;