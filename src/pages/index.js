import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// components
import MainMenu from "../components/MainMenu/MainMenu";
import { addUserToken } from "../store/actions/user.action";

// css
import styles from "../styles/pages/menu.module.scss";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addUserToken());
  }, []);

  return (
    <>
      <div className={styles.container}>
        <MainMenu />
      </div>
    </>
  );
}
