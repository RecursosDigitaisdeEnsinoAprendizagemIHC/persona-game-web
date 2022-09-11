import React from "react";

// components
import MainMenu from "../components/MainMenu/MainMenu";

// css
import styles from "../styles/pages/menu.module.scss";

export default function Home() {
  return (
      <div className={styles.container}>
        <MainMenu />
      </div>
  );
}
