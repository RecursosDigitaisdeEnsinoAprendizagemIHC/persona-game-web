import React from "react";
import { Dialog } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

// components
import {
  Content,
  Row,
  IconContainer,
  TextContainer,
  RewardContainer,
  ButtonContainer,
} from "./FinishedStepModal.style";
import Button from "../../../Button/Button";

// constants
import theme from "../../../../constants/theme";

const MIN_CORRECT_ANSWERS = 3;
const SUCCESS_MESSAGE =
  "Parabéns! Você finalizou a fase com sucesso e ganhou as seguintes recompensas:";
const FAILURE_MESSAGE = `Infelizmente você não atingiu a quantidade mínima de ${MIN_CORRECT_ANSWERS} acertos, revise o conteúdo e tente novamente.`;

const FinishedStepModal = ({ data, open, onClose, onContinue }) => {
  const router = useRouter();

  if (!open) return <div />;

  const { success } = data;
  const continueHandler = () => {
    onClose();
    onContinue();
  };

  const clickHereHandler = () => {
    const route = success ? "/rewards" : "/summary";
    router.push(route);
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
            <span>{success ? SUCCESS_MESSAGE : FAILURE_MESSAGE}</span>
          </TextContainer>
        </Row>
        <Row>
          {success && <RewardContainer></RewardContainer>}
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