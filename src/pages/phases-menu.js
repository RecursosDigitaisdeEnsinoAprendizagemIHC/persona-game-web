import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// components
import Container from "../components/ui/Container/Container";
import {
  HeaderTitle,
  HeaderBtn,
  HeaderContainer,
} from "../components/ui/phases/Phases.style";
import PhaseList from "../components/PhaseList/PhaseList";

// constants
import theme from "../constants/theme";

const PhasesMenu = () => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderBtn>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color={theme.primary} />
        </HeaderBtn>
        <HeaderTitle>Fases</HeaderTitle>
      </HeaderContainer>

      <PhaseList />
    </Container>
  );
};

export default PhasesMenu;
