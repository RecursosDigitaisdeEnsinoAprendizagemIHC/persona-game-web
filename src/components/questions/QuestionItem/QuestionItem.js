import React, { useState } from "react";
import TFOptions from "../TFOptions/TFOptions";
import { useRouter } from "next/router";

// components
import {
  Header,
  QuestionNumber,
  QuestionText,
  Footer,
} from "./QuestionItem.style";
import Button from "../../Button/Button";
import MCOptions from "../MCOptions/MCOptions";

const QuestionItem = ({ question, questionNumber, onConfirm, onPrevious }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const router = useRouter();

  const confirmHandler = () => {
    setSelectedAnswer("");
    onConfirm(selectedAnswer);
  };

  return (
    <div>
      <Header>
        <span onClick={() => router.push("/phases-menu")}>Sair</span>
        <span>Fase 1 Etapa 1</span>
      </Header>

      <div>
        <QuestionNumber>Questão {questionNumber}: </QuestionNumber>
        <QuestionText>{question.title}</QuestionText>
        {question.description && (
          <QuestionText>
            <div dangerouslySetInnerHTML={{ __html: question.description }} />
          </QuestionText>
        )}
      </div>

      {question.type === "VF" ? (
        <TFOptions selected={selectedAnswer} setSelected={setSelectedAnswer} />
      ) : (
        <MCOptions
          options={question.questionOptions.sort((a, b) =>
            a.option > b.option ? 1 : -1
          )}
          selected={selectedAnswer}
          setSelected={setSelectedAnswer}
        />
      )}

      <Footer>
        <Button
          onClick={() => onPrevious()}
          color="secondary"
          disabled={questionNumber === 1}
        >
          {"<"} Anterior
        </Button>
        <Button
          onClick={() => confirmHandler()}
          color={selectedAnswer ? "primary" : "lightGray"}
          disabled={!selectedAnswer}
        >
          Confirmar
        </Button>
      </Footer>
    </div>
  );
};

export default QuestionItem;
