import React from "react";

// components
import Header from "../components/Header/Header";
import MainMenu from "../components/MainMenu/MainMenu";

// css
import styles from "../styles/pages/menu.module.scss";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <MainMenu />
      </div>
    </>
  );
}
