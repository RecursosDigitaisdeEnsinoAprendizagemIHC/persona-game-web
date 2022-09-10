import React from "react";
import { Tooltip } from 'react-tippy';

// components
import { ListContainer, ListItem } from "./StepList.style";
import StepItem from "../StepItem/StepItem";
import Trail from "../Trail/Trail";

const StepList = ({ steps }) => {
  return (
    <ListContainer>
      {steps.map((step, index) => (
        <Tooltip
          title={!step.locked && `iniciar fase ${step.number}`}
          position="bottom"
          animation="fade"
          theme="transparent"
          distance={2}
          key={step.number}
        >
          <ListItem >
            <StepItem step={step} />
            {steps.length !== index + 1 && <Trail />}
          </ListItem>
        </Tooltip>
      ))}
    </ListContainer>
  );
};

export default StepList;
