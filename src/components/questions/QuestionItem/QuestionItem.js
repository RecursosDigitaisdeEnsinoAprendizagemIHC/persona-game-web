import React, { useState } from "react";
import TFOptions from "../TFOptions/TFOptions";

// components
import {
  Header,
  QuestionNumber,
  QuestionText,
  Footer,
} from "./QuestionItem.style";
import Button from "../../Button/Button";
import MCOptions from "../MCOptions/MCOptions";

const QuestionItem = () => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const questionType = "MC";

  return (
    <div>
      <Header>
        <span>Sair</span>
        <span>Fase 1 Etapa 1</span>
      </Header>

      <div>
        <QuestionNumber>Questão 1: </QuestionNumber>
        <QuestionText>
          Uma persona é uma forma de representar um tipo de público alvo.
        </QuestionText>
      </div>

      {questionType === "TF" ? (
        <TFOptions selected={selectedAnswer} setSelected={setSelectedAnswer} />
      ) : (
        <MCOptions selected={selectedAnswer} setSelected={setSelectedAnswer} />
      )}

      <Footer>
        <Button color="secondary">{"<"} Anterior</Button>
        <Button
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
