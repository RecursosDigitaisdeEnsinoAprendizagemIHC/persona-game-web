import React from "react";
import Countdown from "react-countdown";
import { Tooltip } from "react-tippy";
import { ExitButton } from "../QuestionItem/QuestionItem.style";

// components
import {
  Container,
  CountdownText,
} from "./QuestionsFeedback.style";

const STEP_MAX_TIME = 5 * 60000;

const QuestionsFeedback = ({
  startDate,
  onFail,
}) => {

  const zeroPadTime = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  const countdownRenderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // trigger step fail with message explaning why
      return <CountdownText fail>00:00</CountdownText>;
    } else {
      return (
        <CountdownText>
          {zeroPadTime(minutes)}:{zeroPadTime(seconds)}
        </CountdownText>
      );
    }
  };

  return (
    <Container>
      <Countdown
        date={startDate + STEP_MAX_TIME}
        renderer={countdownRenderer}
        onComplete={() => onFail("TIME_OVER")}
      />
    </Container>
  );
};

export default QuestionsFeedback;
