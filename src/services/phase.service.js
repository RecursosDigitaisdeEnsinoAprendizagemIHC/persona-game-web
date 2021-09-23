import baseApi, { getHeader } from "./baseApi";

export const getPhasesList = async (token) => {
  // get all phases and user finished steps and return all phases/steps with "locked" attr
  const config = { headers: getHeader(token) };
  const { data: phases } = await baseApi.get("/phases", config);
  const { data: userFinishedSteps } = await baseApi.get(
    "/finished_steps",
    config
  );
  const finishedStepsByPhase = getFinishedStepsByPhase(userFinishedSteps);
  for (const phase of phases) {
    const lastStepNumber = phase.steps[phase.steps.length - 1].number;
    for (const step of phase.steps) {
      step.locked = true;
      if (
        step.number === 1 &&
        (phase.number === 1 ||
          (finishedStepsByPhase[phase.id] &&
            finishedStepsByPhase[phase.number - 1].includes(lastStepNumber)))
      ) {
        step.locked = false;
      } else if (
        finishedStepsByPhase[phase.id] &&
        finishedStepsByPhase[phase.id].includes(step.number - 1)
      ) {
        step.locked = false;
      }
    }
  }
  return phases;
};

const getFinishedStepsByPhase = (userFinishedSteps) => {
  const stepsByPhase = {};
  const steps = userFinishedSteps.map((item) => item.step);
  for (const step of steps) {
    if (stepsByPhase[step.phase_id]) {
      stepsByPhase[step.phase_id].push(step.number);
    } else {
      stepsByPhase[step.phase_id] = [step.number];
    }
  }
  return stepsByPhase;
};
