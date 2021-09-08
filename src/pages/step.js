import React from "react";
import QuestionItem from "../components/questions/QuestionItem/QuestionItem";

// components
import Container from "../components/ui/Container/Container";

const dummyQuestion = {
  title: "Pergunta sobre ...",
  type: "VF",
  questionOptions: [],
  answer: {
    option: "V",
    reason: "A pergunta é verdadeira porque...",
  },
};

const Step = () => {
  return (
    <Container>
      <QuestionItem question={dummyQuestion} />
    </Container>
  );
};

export default Step;
