import React from "react";

// components
import { Container } from "./TFOptions.style";
import Button from "../../Button/Button";

const TFOptions = ({ selected, setSelected }) => {
  return (
    <Container>
      <Button
        color="success"
        active={selected === "V"}
        onClick={() => setSelected("V")}
      >
        Verdadeiro
      </Button>
      <Button
        color="error"
        active={selected === "F"}
        onClick={() => setSelected("F")}
      >
        Falso
      </Button>
    </Container>
  );
};

export default TFOptions;
