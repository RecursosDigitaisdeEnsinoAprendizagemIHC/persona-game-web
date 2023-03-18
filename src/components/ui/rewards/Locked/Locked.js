import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "styled-components";

// components
import { LockedBackground } from "./Locked.styles";


const Locked = () => {
  const theme = useContext(ThemeContext)

  return (
    <LockedBackground>
      <FontAwesomeIcon icon={faLock} color={theme.primary} size="2x" />
    </LockedBackground>
  );
};

export default Locked;
