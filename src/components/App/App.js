import React, { useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router'
import 'react-toastify/dist/ReactToastify.min.css'
import 'react-tippy/dist/react-tippy';
import 'react-tippy/dist/tippy.css'

import Header from "../Header/Header";
import AppWrapper from "../AppWrapper/AppWrapper";

import { darkTheme, lightTheme } from "../../constants/theme";
import { GlobalStyle } from "../../styles/globalStyles";

import { loadUserPreferences } from "../../store/actions/preferences.action";

const HOME_PATHNAME = '/'

function App({ children }) {
  const router = useRouter()
  const userToken = useSelector((state) => state.user.userToken);
  const { preferences } = useSelector((state) => state.preferences);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userToken) dispatch(loadUserPreferences(userToken));
  }, [userToken]);

  const highContrast = preferences.find(pref => pref.name === "Auto contraste")

  console.log(preferences)

  return (
      <ThemeProvider theme={Number(highContrast?.value) ? darkTheme : lightTheme}>
        <AppWrapper>
          <Head>
            <title>Persona Design Game</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
            />
          </Head>
          {router.pathname !== HOME_PATHNAME && <Header />}
          {children}
        </AppWrapper>
        <GlobalStyle />
      </ThemeProvider>
  );
}

export default App;
