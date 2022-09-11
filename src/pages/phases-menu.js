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
import ModalSystemError from "../components/ModalSystemError/ModalSystemError";

// constants
import theme from "../constants/theme";
import { useDispatch, useSelector } from "react-redux";
import { getAllPhases } from "../store/actions/phase.action";
import Loading from "../components/loading/loading";

const PhasesMenu = () => {

  const isLoading = useSelector((state) => state.loading.isLoading);
  const phases = useSelector((state) => state.phases.phases);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPhases());
  }, []);

  const goBack = ()=>{
    dispatch({ type: 'GET_ALL_PHASES' });
    router.push("./")
  }

  if (!phases) {
    return <div/>
  }

  return (
    <>
    <Container>
      <HeaderContainer>
        <HeaderBtn onClick={()=>goBack()}>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color={theme.primary} />
        </HeaderBtn>
        <HeaderTitle>Fases</HeaderTitle>
      </HeaderContainer>
     {phases.code === undefined ? <PhaseList phases={phases} />:<ModalSystemError openModal error={phases.code} message={phases.message} />} 
    
    </Container>
    {isLoading &&  <Loading />}
    </>
  );
};

export default PhasesMenu;
