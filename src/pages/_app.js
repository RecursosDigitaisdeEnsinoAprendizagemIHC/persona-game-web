import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import theme from "../constants/theme";
import "../styles/globals.css";
import Header from "../components/Header/Header";
import AppWrapper from "../components/AppWrapper/AppWrapper";

// redux
import userReducer from "../store/reducers/user.reducer";
import phaseReducer from "../store/reducers/phase.reducer";
import stepReducer from "../store/reducers/step.reducer";
import rewardReducer from "../store/reducers/reward.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  phases: phaseReducer,
  step: stepReducer,
  reward: rewardReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <Head>
            <title>Persona Design Game</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
            />
          </Head>
          <Header />
          <Component {...pageProps} />
        </AppWrapper>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
