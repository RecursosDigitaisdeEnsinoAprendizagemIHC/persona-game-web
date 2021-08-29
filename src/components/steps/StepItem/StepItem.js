import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

// components
import { Step } from "./StepItem.style";

// constants
import theme from "../../../constants/theme";

const StepItem = ({ step }) => {
  return (
    <Step>
      {step.locked ? (
        <FontAwesomeIcon icon={faLock} color={theme.primary} />
      ) : (
        step.number
      )}
    </Step>
  );
};

export default StepItem;
