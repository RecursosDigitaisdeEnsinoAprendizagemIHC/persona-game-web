import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

// components
import {
  Title,
  Container,
  Row,
  Avatar,
  LargeReward,
  Reward,
  LockedBackground,
  RewardContent,
  RewardIcon,
  RewardName,
  RewardText,
} from "./Personas.styles";

import theme from "../../../../constants/theme";

const groupArrayByTwo = (arr) => {
  const newArr = [];
  for (let index = 0; index < Math.ceil(arr.length / 2); index++) {
    newArr.push(arr.slice(index * 2, index * 2 + 2));
  }
  return newArr;
};

const iconsByRewardName = {
  Identidade: "user-icon.png",
  Objetivos: "dartboard-icon.png",
  Habilidades: "skills-icon.png",
  Tarefas: "task-icon.png",
  Relacionamento: "relationship-icon.jpg",
  Requisitos: "requirements-icon.png",
  Expectativas: "expectation.png",
};

const Personas = ({ rewards, userRewards }) => {
  if (rewards && rewards.length <= 0) {
    return <div />;
  }

  return (
    <div>
      <Title>Persona Primária</Title>
      <Container>
        <Row>
          <Avatar>
            <img src="/icons/person-icon.png" alt="Persona Primária Avatar" />
          </Avatar>
          <LargeReward>
            {!userRewards.find((item) => item.rewardId === rewards[0].id) && (
              <LockedBackground>
                <FontAwesomeIcon
                  icon={faLock}
                  color={theme.primary}
                  size="2x"
                />
              </LockedBackground>
            )}
            <RewardContent
              locked={
                !userRewards.find((item) => item.rewardId === rewards[0].id)
              }
            >
              <RewardIcon>
                <img src="/icons/user-icon.png" alt="Identidade Icon" />
              </RewardIcon>
              <div>
                <RewardName>{rewards[0].name}: </RewardName>
                <RewardText>{rewards[0].description}</RewardText>
              </div>
            </RewardContent>
          </LargeReward>
        </Row>
        {groupArrayByTwo(rewards.slice(1)).map((items, index) => (
          <Row key={index}>
            {items.map((reward) => (
              <Reward key={reward.id}>
                {!userRewards.find((item) => item.rewardId === reward.id) && (
                  <LockedBackground>
                    <FontAwesomeIcon
                      icon={faLock}
                      color={theme.primary}
                      size="2x"
                    />
                  </LockedBackground>
                )}
                <RewardContent
                  locked={
                    !userRewards.find((item) => item.rewardId === reward.id)
                  }
                >
                  <RewardIcon>
                    <img
                      src={`/icons/${iconsByRewardName[reward.name]}`}
                      alt={`${reward.name} Icon`}
                    />
                  </RewardIcon>
                  <div>
                    <RewardName>{reward.name}: </RewardName>
                    <RewardText>{reward.description}</RewardText>
                  </div>
                </RewardContent>
              </Reward>
            ))}
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default Personas;
