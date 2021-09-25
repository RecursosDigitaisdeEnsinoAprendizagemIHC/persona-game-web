import React from "react";
import { useSelector } from "react-redux";

// components
import { Container, QuestionItem } from "./QuestionsFeedback.style";

const QuestionsFeedback = ({ questions, selectedQuestion }) => {
  const answeredQuestions = useSelector(
    (state) => state.step.answeredQuestions
  );

  return (
    <Container>
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
