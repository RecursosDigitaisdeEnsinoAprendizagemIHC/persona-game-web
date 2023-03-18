import React, { useContext } from "react";
import { Dialog } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { ThemeContext } from "styled-components";

// components
import {
  Content,
  Row,
  IconContainer,
  TextContainer,
  ButtonContainer,
} from "./FinishedStepModal.style";
import Button from "../../../Button/Button";
import RewardCarousel from "../../../RewardCarousel/RewardCarousel";


const MIN_CORRECT_ANSWERS = 3;
const SUCCESS_MESSAGE =
  "Parabéns! Você finalizou a fase com sucesso e ganhou as seguintes recompensas:";
const FAILURE_MESSAGE = `Infelizmente você não atingiu a quantidade mínima de ${MIN_CORRECT_ANSWERS} acertos, revise o conteúdo e tente novamente.`;
const TIME_OVER_MESSAGE = "O tempo limite da fase se esgotou :(";

const FinishedStepModal = ({ data, open, onClose, onContinue }) => {
  const router = useRouter();
  const theme = useContext(ThemeContext)

  if (!open) return <div />;

  const { success, reason, rewards } = data;

  const continueHandler = () => {
    onClose();
    onContinue();
  };

  const clickHereHandler = () => {
    const route = success ? "/rewards" : "/summary";
    router.push(route);
  };

  const getFailureMessage = () => {
    let message = FAILURE_MESSAGE;
    if (reason && reason === "TIME_OVER") {
      message = TIME_OVER_MESSAGE;
    }
    return message;
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Content>
        <Row>
          <IconContainer>
            <FontAwesomeIcon
              icon={success ? faCheckCircle : faTimesCircle}
              color={success ? theme.success : theme.error}
              size="3x"
            />
          </IconContainer>
          <TextContainer>
            <span>{success ? SUCCESS_MESSAGE : getFailureMessage()}</span>
          </TextContainer>
        </Row>
        <Row>{rewards.length > 0 && <RewardCarousel rewards={rewards} />}</Row>
        <Row>
          <TextContainer>
            <span>
              <a href="#" onClick={() => clickHereHandler()}>
                Clique aqui{" "}
              </a>
              para{" "}
              {success
                ? "ver todas as suas recompensas"
                : "acessar a área de resumos"}
              .
            </span>
          </TextContainer>
        </Row>
        <ButtonContainer>
          <Button color="primary" onClick={() => continueHandler()}>
            Finalizar
          </Button>
        </ButtonContainer>
      </Content>
    </Dialog>
  );
};

export default FinishedStepModal;
