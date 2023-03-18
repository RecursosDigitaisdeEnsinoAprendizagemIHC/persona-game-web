import React, { useContext } from "react";
import { Dialog } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "styled-components";

// components
import {
  Content,
  Row,
  IconContainer,
  TextContainer,
  ButtonContainer,
} from "./QuestionAnswerModal.style";
import Button from "../../../Button/Button";


const CORRECT_MESSAGE = "Parabéns! Você acertou.";
const WRONG_MESSAGE = "Que pena, voce não acertou :(";

const QuestionAnswerModal = ({ data, open, onClose, onContinue }) => {
  const theme = useContext(ThemeContext)

  if (!data || data.error) return <div />;
  const { correct, reason } = data.answer;
  const continueHandler = () => {
    onClose();
    onContinue();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Content>
        <Row>
          <IconContainer>
            <FontAwesomeIcon
              icon={correct ? faCheckCircle : faTimesCircle}
              color={correct ? theme.success : theme.error}
              size="3x"
            />
          </IconContainer>
          <TextContainer>
            <span>{correct ? CORRECT_MESSAGE : WRONG_MESSAGE}</span>
            <span>Explicação: {reason}</span>
          </TextContainer>
        </Row>
        <ButtonContainer>
          <Button color="primary" onClick={() => continueHandler()}>
            Continuar
          </Button>
        </ButtonContainer>
      </Content>
    </Dialog>
  );
};

export default QuestionAnswerModal;
