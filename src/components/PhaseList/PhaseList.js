import React from "react";
import StepList from "../steps/StepList/StepList";

import { Title } from "./PhaseList.style";

const phasesDummy = [
  {
    name: "Conceitos Gerais",
    number: 1,
    steps: [
      {
        number: 1,
        locked: false,
      },
      {
        number: 2,
        locked: false,
      },
      {
        number: 3,
        locked: true,
      },
      {
        number: 4,
        locked: true,
      },
      {
        number: 5,
        locked: true,
      },
    ],
  },
  {
    name: "Características das Personas",
    number: 2,
    steps: [
      {
        number: 1,
        locked: true,
      },
      {
        number: 2,
        locked: true,
      },
      {
        number: 3,
        locked: true,
      },
      {
        number: 4,
        locked: true,
      },
      {
        number: 5,
        locked: true,
      },
    ],
  },
];

const PhaseList = () => {
  return (
    <div>
      {phasesDummy.map((phase) => (
        <div key={phase.number}>
          <Title>
            Fase {phase.number}: {phase.name}
          </Title>
          <StepList steps={phase.steps} />
        </div>
      ))}
    </div>
  );
};

export default PhaseList;
