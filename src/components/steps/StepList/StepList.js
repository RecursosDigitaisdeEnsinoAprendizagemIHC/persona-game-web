import React from "react";

// components
import { ListContainer, ListItem } from "./StepList.style";
import StepItem from "../StepItem/StepItem";
import Trail from "../Trail/Trail";

const StepList = ({ steps }) => {
  return (
    <ListContainer>
      {steps.map((step, index) => (
        <ListItem key={step.number}>
          <StepItem step={step} />
          {steps.length !== index + 1 && <Trail />}
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default StepList;
