import React, { useEffect } from "react";
import { useRouter } from "next/router";

// components
import Container from "../components/ui/Container/Container";
import PhaseList from "../components/PhaseList/PhaseList";
import ModalSystemError from "../components/ModalSystemError/ModalSystemError";

// constants
import { useDispatch, useSelector } from "react-redux";
import { getAllPhases } from "../store/actions/phase.action";
import Loading from "../components/loading/loading";
import PageHeader from "../components/ui/PageHeader/PageHeader";

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
      <PageHeader onBack={() => goBack()} title="Fases" />
      {phases.code === undefined ? (
          <PhaseList phases={phases} />
        ):(
          <ModalSystemError openModal error={phases.code} message={phases.message} />
        )
      }
    </Container>

    {isLoading &&  <Loading />}
    </>
  );
};

export default PhasesMenu;
