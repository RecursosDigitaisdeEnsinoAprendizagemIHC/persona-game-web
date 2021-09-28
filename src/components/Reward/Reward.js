import React from "react";

// components
import { Container, Title, Row, CardIconContainer, Text } from "./Reward.style";

const REWARDS_TYPE = {
  CARD: "Card de característica de persona",
  TIME_MEDAL: "Medalha de tempo de resposta",
  QUESTION_COMBO_MEDAL: "Medalha de combo de respostas corretas",
  STEP_COMBO_MEDAL: "Medalha de combo de etapas completas",
};

const LEVEL_NAME = {
  gold: "Ouro",
  silver: "Prata",
  bronze: "Bronze",
};

const CARD_ICONS = {
  Identidade: "/icons/user-icon.png",
  Objetivos: "/icons/dartboard-icon.png",
  Habilidades: "/icons/skills-icon.png",
  Tarefas: "/icons/task-icon.png",
  Relacionamento: "/icons/relationship-icon.jpg",
  Requisitos: "/icons/requirements-icon.png",
  Expectativas: "/icons/expectation.png",
};

const Reward = ({ item }) => {
  const { reward, level } = item;

  return (
    <Container>
      <Title>
        {REWARDS_TYPE[reward.type]} {level ? `(${LEVEL_NAME[level]})` : ""}
      </Title>
      <Row>
        <CardIconContainer>
          <img
            src={level ? `/icons/${level}-medal.png` : CARD_ICONS[reward.name]}
            alt="Reward Icon"
          />
        </CardIconContainer>
        <Text>
          {reward.name}: {reward.description}
        </Text>
      </Row>
    </Container>
  );
};

export default Reward;
