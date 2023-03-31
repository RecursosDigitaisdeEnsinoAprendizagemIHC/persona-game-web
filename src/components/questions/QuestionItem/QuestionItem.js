import React, { useState } from "react";
import TFOptions from "../TFOptions/TFOptions";
import { useRouter } from "next/router";
import { Tooltip } from 'react-tippy';
import Countdown from "react-countdown";

// components
import {
  Container,
  Header,
  QuestionText,
  Footer,
  ExitButton,
  QuestionHeader,
  CountdownText
} from "./QuestionItem.style";
import Button from "../../Button/Button";
import MCOptions from "../MCOptions/MCOptions";
import ModalConfirmation from "../../ModalConformation/ModalConformation";
import { CloseIcon } from "../../../../public/close";
import { LinearProgress } from "@material-ui/core";

const STEP_MAX_TIME = 5 * 60000;

const QuestionItem = ({
  question,
  questionNumber,
  onConfirm,
  startDate,
  onFail,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isconfirmModal, setIsconfirmModal] = useState(false);

  const router = useRouter();

  const confirmHandler = () => {
    setSelectedAnswer("");
    onConfirm(selectedAnswer);
  };

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
    <>
      <Container>
        <Header>
          <div>
            <Tooltip
                title="Sair do questionario"
                position="bottom"
                animation="fade"
                theme="transparent"
                distance={2}
              >
              <ExitButton onClick={() => setIsconfirmModal(true)}>
                <CloseIcon />
                Sair
              </ExitButton>
            </Tooltip>
            <LinearProgress
              variant="determinate"
              value={questionNumber * 20}
              style={{ width: '85%', height: '12px', borderRadius: '6px' }}
            />
            <strong>{questionNumber}/5</strong>
          </div>

          <div>
            <span>Conceitos sobre personas</span>
            <Countdown
              date={startDate + STEP_MAX_TIME}
              renderer={countdownRenderer}
              onComplete={() => onFail("TIME_OVER")}
            />
          </div>
        </Header>

        <QuestionHeader>
          {/* <QuestionNumber>Questão {questionNumber}: </QuestionNumber> */}
          <QuestionText>{question.title}</QuestionText>
          {question.description && (
            <QuestionText>
              <div dangerouslySetInnerHTML={{ __html: question.description }} />
            </QuestionText>
          )}
        </QuestionHeader>

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
            onClick={() => confirmHandler()}
            color={selectedAnswer ? "primary" : "lightGray"}
            disabled={!selectedAnswer}
            TooltipText='Confirmar resposta'
          >
            Confirmar
          </Button>
        </Footer>
    </Container>

    <ModalConfirmation
      openModal={isconfirmModal}
      setIsOpenModal={setIsconfirmModal}
      handleConfirm={() => router.push("/phases-menu")}
    />
    </>
  );
};

export default QuestionItem;
