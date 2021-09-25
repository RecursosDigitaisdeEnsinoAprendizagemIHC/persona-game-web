import React from "react";

// components
import { Container } from "./Questions.style";
import QuestionsFeedback from "../QuestionsFeedback/QuestionsFeedback";
import QuestionItem from "../QuestionItem/QuestionItem";

const Questions = ({
  questions,
  selectedQuestion,
  questionNumber,
  onConfirm,
  onPrevious,
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
      />
    </Container>
  );
};

export default Questions;
