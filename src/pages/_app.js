import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import theme from "../constants/theme";
import "../styles/globals.css";

import Header from "../components/Header/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Persona Design Game</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
