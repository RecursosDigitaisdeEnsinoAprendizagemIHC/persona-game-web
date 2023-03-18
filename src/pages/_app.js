import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import 'react-tippy/dist/react-tippy';
import 'react-tippy/dist/tippy.css'

import "../styles/globals.css";
import FixedButtons from "../components/FixedButtons/FixedButtons";
import App from "../components/App/App";

// redux
import userReducer from "../store/reducers/user.reducer";
import phaseReducer from "../store/reducers/phase.reducer";
import stepReducer from "../store/reducers/step.reducer";
import rewardReducer from "../store/reducers/reward.reducer";
import preferencesReducer from "../store/reducers/preferences.reducer";
import loadingReducer from "../store/reducers/loading.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  phases: phaseReducer,
  step: stepReducer,
  reward: rewardReducer,
  preferences: preferencesReducer,
  loading: loadingReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <App>
        <Component {...pageProps} />
        <FixedButtons />
        <ToastContainer />
      </App>
    </Provider>
  );
}

export default MyApp;
