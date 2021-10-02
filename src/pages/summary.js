import { useRouter } from "next/router";
import React from "react";

// components
import Container from "../components/ui/Container/Container";
import PageHeader from "../components/ui/PageHeader/PageHeader";
import SummaryContent from "../components/ui/Summary/Summary";

const Summary = () => {
  const router = useRouter();

  return (
    <Container>
      <PageHeader onBack={() => router.push("/")} title="Resumos" />
      <SummaryContent />
    </Container>
  );
};

export default Summary;
