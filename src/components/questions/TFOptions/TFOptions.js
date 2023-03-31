import React from "react";

// components
import {
  Container,
  Option
} from "./TFOptions.style";

const TFOptions = ({ selected, setSelected }) => {
  return (
    <Container>
      <Option
        color="success"
        active={selected === "V"}
        onClick={() => setSelected("V")}
      >
        <span>A</span>
        Verdadeiro
      </Option>
      <Option
        color="error"
        active={selected === "F"}
        onClick={() => setSelected("F")}
      >
        <span>B</span>
        Falso
      </Option>
    </Container>
  );
};

export default TFOptions;
