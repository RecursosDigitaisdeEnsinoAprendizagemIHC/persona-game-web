import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import Loading from "../components/loading/loading";

// components
import Container from "../components/ui/Container/Container";
import PageHeader from "../components/ui/PageHeader/PageHeader";
import SummaryContent from "../components/ui/Summary/Summary";

const Summary = () => {
  const router = useRouter();
  const isLoading = useSelector((state) => state.loading.isLoading);
  return (
    <>
      <Container>
        <PageHeader onBack={() => router.push("/")} title="Resumos" />
        <SummaryContent />
      </Container>
      {isLoading &&  <Loading />}
    </>
  );
};

export default Summary;
