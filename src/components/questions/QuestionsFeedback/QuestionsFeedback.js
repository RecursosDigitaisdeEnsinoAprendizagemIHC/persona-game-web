import React from "react";
import { useSelector } from "react-redux";
import Countdown from "react-countdown";

// components
import {
  Container,
  QuestionItem,
  CountdownText,
} from "./QuestionsFeedback.style";

const STEP_MAX_TIME = 5 * 60000;

const QuestionsFeedback = ({
  questions,
  selectedQuestion,
  startDate,
  onFail,
}) => {
  const answeredQuestions = useSelector(
    (state) => state.step.answeredQuestions
  );

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
      {questions.map((question, index) => {
        const answeredQuestion = answeredQuestions.find(
          (el) => el.questionId === question.id
        );
        let color = "";
        if (answeredQuestion) {
          color = answeredQuestion.answer.correct ? "success" : "error";
        }
        return (
          <QuestionItem
            key={question.id}
            active={question.id == selectedQuestion.id}
            color={color}
          >
            Questão {index + 1}
          </QuestionItem>
        );
      })}
    </Container>
  );
};

export default QuestionsFeedback;
