import React from "react";

// components
import { Container } from "./Questions.style";
import QuestionItem from "../QuestionItem/QuestionItem";

const Questions = ({
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
        startDate={startDate}
        onFail={onFail}
      />
    </Container>
  );
};

export default Questions;
