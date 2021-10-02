import React from "react";
import ReactTooltip from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

// components
import {
  TitleContainer,
  Title,
  InfoContainer,
  Container,
  Row,
  MedalContainer,
  MedalContent,
  MedalText,
} from "./Medals.styles";
import Locked from "../Locked/Locked";

// constants
import theme from "../../../../constants/theme";

const medalsLevel = {
  bronze: 1,
  silver: 2,
  gold: 3,
};

const rewardsInfo = {
  TIME_MEDAL:
    "Ouro: 0~90 segundos, Prata: 91~180 segundos e Bronze: 180~240 segundos.",
  QUESTION_COMBO_MEDAL:
    "Ouro: combo de 15, Prata: combo de 10 e Bronze: combo de 5",
  STEP_COMBO_MEDAL: "Ouro: combo de 5, Prata: combo de 3, Bronze: combo de 2",
};

const MedalsList = ({ userHasReward }) => {
  const level = userHasReward?.level;
  const medalLevel = level ? medalsLevel[level] : 0;

  return (
    <Row>
      <MedalContainer>
        {medalLevel < 1 && <Locked />}
        <MedalContent locked={medalLevel < 1}>
          <img src="/icons/bronze-medal.png" />
          <MedalText>Bronze</MedalText>
        </MedalContent>
      </MedalContainer>
      <MedalContainer>
        {medalLevel < 2 && <Locked />}
        <MedalContent locked={medalLevel < 2}>
          <img src="/icons/silver-medal.png" />
          <MedalText>Prata</MedalText>
        </MedalContent>
      </MedalContainer>
      <MedalContainer>
        {medalLevel < 3 && <Locked />}
        <MedalContent locked={medalLevel < 3}>
          <img src="/icons/gold-medal.png" />
          <MedalText>Ouro</MedalText>
        </MedalContent>
      </MedalContainer>
    </Row>
  );
};

const Medals = ({ rewards, userRewards }) => {
  console.log(rewards);
  return (
    <Container>
      {rewards.map((reward) => (
        <div key={reward.id}>
          <TitleContainer>
            <Title>{reward.name}</Title>
            <InfoContainer
              data-tip={reward.description + "<br>" + rewardsInfo[reward.type]}
            >
              <FontAwesomeIcon icon={faInfoCircle} color={theme.primary} />
            </InfoContainer>
            <ReactTooltip html={true} />
          </TitleContainer>
          <MedalsList
            userHasReward={userRewards.find(
              (item) => item.rewardId === reward.id
            )}
          />
        </div>
      ))}
    </Container>
  );
};

export default Medals;
