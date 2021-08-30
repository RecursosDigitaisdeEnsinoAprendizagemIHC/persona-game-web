import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import theme from "../constants/theme";
import "../styles/globals.css";
import Header from "../components/Header/Header";
import userReducer from "../store/reducers/user.reducer";
import phaseReducer from "../store/reducers/phase.reducer";
import AppWrapper from "../components/AppWrapper/AppWrapper";

const rootReducer = combineReducers({
  user: userReducer,
  phases: phaseReducer,
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
