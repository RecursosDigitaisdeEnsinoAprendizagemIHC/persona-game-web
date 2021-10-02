import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

// components
import { LockedBackground } from "./Locked.styles";

// constants
import theme from "../../../../constants/theme";

const Locked = () => {
  return (
    <LockedBackground>
      <FontAwesomeIcon icon={faLock} color={theme.primary} size="2x" />
    </LockedBackground>
  );
};

export default Locked;
