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
import { Box, LinearProgress, Modal, Typography } from "@material-ui/core";
import { TipIcon } from "../../../../public/tip";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

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
  const [openTipModal, setOpenTipModal] = useState(false);

  const router = useRouter();
  const theme = useContext(ThemeContext)

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

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: theme.primaryBackground,
    border: `2px solid ${theme.white}`,
    boxShadow: 24,
    borderRadius: 12,
    p: 3,
    color: theme.black
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
          <div>
            <QuestionText>{question.title}</QuestionText>
            {question.description && (
              <QuestionText>
                <div dangerouslySetInnerHTML={{ __html: question.description }} />
              </QuestionText>
            )}
          </div>
          <Tooltip
            title="Exibir dica para pergunta"
            position="bottom"
            animation="fade"
            theme="transparent"
            distance={2}
          >
            <button onClick={() => setOpenTipModal(true)}>
              <TipIcon />
            </button>
          </Tooltip>
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

      <Modal
        open={openTipModal}
        onClose={() => setOpenTipModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <button
            style={{ position: 'absolute', right: '20px', top: '20px' }}
            onClick={() => setOpenTipModal(false)}
          >
            <CloseIcon color={theme.black} />
          </button>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Dica para a pergunta
          </Typography>
          {question.questionTips.map(tip => (
            <Typography key={tip.id} id="modal-modal-description" style={{ marginTop: '16px' }}>
              {tip.description}
            </Typography>
          ))}
        </Box>
      </Modal>
    </>
  );
};

export default QuestionItem;
