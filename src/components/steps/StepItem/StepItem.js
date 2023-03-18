import React, { useContext } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

// components
import { Step } from "./StepItem.style";

import { ThemeContext } from "styled-components";

const StepItem = ({ step }) => {
  const router = useRouter();
  const theme = useContext(ThemeContext)

  const startStepHandler = () => {
    if (step.locked) return;
    // dispatch startStepHandler
    router.push({
      pathname: "/step/",
      query: { stepNumber: step.number, stepId: step.id },
    });
  };

  return (
    <Step locked={step.locked} onClick={() => startStepHandler()}>
      {step.locked ? (
        <FontAwesomeIcon icon={faLock} color={theme.primary} />
      ) : (
        step.number
      )}
    </Step>
  );
};

export default StepItem;
