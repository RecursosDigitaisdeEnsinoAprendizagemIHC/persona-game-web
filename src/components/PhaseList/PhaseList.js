import React from "react";
import StepList from "../steps/StepList/StepList";

import { Title } from "./PhaseList.style";

const PhaseList = ({ phases }) => {
  return (
    <div>
      {phases.map((phase) => (
        <div key={phase.number}>
          <Title>
            Fase {phase.number}: {phase.description}
          </Title>
          <StepList steps={phase.steps} />
        </div>
      ))}
    </div>
  );
};

export default PhaseList;
