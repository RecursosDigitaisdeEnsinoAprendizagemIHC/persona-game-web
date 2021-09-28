import React, { useState } from "react";

// components
import {
  Container,
  RewardContainer,
  DotContainer,
  Dot,
} from "./RewardCarousel.style";
import Reward from "../Reward/Reward";

const RewardCarousel = ({ rewards }) => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <Container>
      <RewardContainer>
        <Reward item={rewards[selectedItem]} />
      </RewardContainer>
      <DotContainer>
        {rewards.map((item, index) => (
          <Dot
            key={item.reward.id}
            active={selectedItem === index}
            onClick={() => setSelectedItem(index)}
          />
        ))}
      </DotContainer>
    </Container>
  );
};

export default RewardCarousel;
