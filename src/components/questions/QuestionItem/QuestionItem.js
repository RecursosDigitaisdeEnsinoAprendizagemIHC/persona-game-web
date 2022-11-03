import React, { useState } from "react";
import TFOptions from "../TFOptions/TFOptions";
import { useRouter } from "next/router";
import { Tooltip } from 'react-tippy';

// components
import {
  Container,
  Header,
  QuestionNumber,
  QuestionText,
  Footer,
  ExitButton,
} from "./QuestionItem.style";
import Button from "../../Button/Button";
import MCOptions from "../MCOptions/MCOptions";
import ModalConfirmation from "../../ModalConformation/ModalConformation";


const QuestionItem = ({ question, questionNumber, onConfirm, onPrevious }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isconfirmModal, setIsconfirmModal] = useState(false);


  const router = useRouter();

  const confirmHandler = () => {
    setSelectedAnswer("");
    onConfirm(selectedAnswer);
  };

  return (
    <>
      <Container>
        <Header>
          <Tooltip
              title="Sair do questionario"
              position="bottom"
              animation="fade"
              theme="transparent"
              distance={2}
            >
              <ExitButton onClick={() => setIsconfirmModal(true)}>Sair</ExitButton>
            </Tooltip>
            <span>Fase 1 Etapa 1</span>
            <div />
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
            TooltipText='Questão anterior'
          >
            {"<"} Anterior
          </Button>
          <Button
            onClick={() => confirmHandler()}
            color={selectedAnswer ? "primary" : "lightGray"}
            disabled={!selectedAnswer}
            TooltipText='Confirmar resposta'
          >
            Confirmar
          </Button>
        </Footer>
    </Container>
    <ModalConfirmation openModal={isconfirmModal} setIsOpenModal={setIsconfirmModal} handleConfirm={() => router.push("/phases-menu")}/>
    </>
  );
};

export default QuestionItem;
