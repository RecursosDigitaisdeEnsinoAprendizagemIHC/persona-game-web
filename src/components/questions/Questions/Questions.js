import React from "react";

// components
import { Container } from "./Questions.style";
import QuestionsFeedback from "../QuestionsFeedback/QuestionsFeedback";
import QuestionItem from "../QuestionItem/QuestionItem";

const Questions = ({
  questions,
  selectedQuestion,
  questionNumber,
  startDate,
  onConfirm,
  onPrevious,
  onFail,
}) => {
  return (
    <Container>
      <QuestionItem
        questionNumber={questionNumber}
        question={selectedQuestion}
        onConfirm={onConfirm}
        onPrevious={onPrevious}
      />
      <QuestionsFeedback
        questions={questions}
        selectedQuestion={selectedQuestion}
        startDate={startDate}
        onFail={onFail}
      />
    </Container>
  );
};

export default Questions;
