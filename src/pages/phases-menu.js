import React, { useEffect } from "react";
import { useRouter } from "next/router";
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
import { useDispatch, useSelector } from "react-redux";
import { getAllPhases } from "../store/actions/phase.action";

const PhasesMenu = () => {
  const phases = useSelector((state) => state.phases.phases);
  const router = useRouter();
  const dispath = useDispatch();
  console.log(phases);

  useEffect(() => {
    dispath(getAllPhases());
  }, []);

  if (!phases) {
    console.log(phases);
    return <div />;
  }

  return (
    <Container>
      <HeaderContainer>
        <HeaderBtn onClick={() => router.push("./")}>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color={theme.primary} />
        </HeaderBtn>
        <HeaderTitle>Fases</HeaderTitle>
      </HeaderContainer>

      <PhaseList phases={phases} />
    </Container>
  );
};

export default PhasesMenu;
