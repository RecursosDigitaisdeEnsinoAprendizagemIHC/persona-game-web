import React from "react";

// components
import {
  Container,
  OptionsContainer,
  Row,
  OptionContainer,
  Option,
  OptionText,
} from "./MCOptions.style";

const MCOptions = ({ selected, setSelected }) => {
  return (
    <Container>
      <OptionsContainer>
        <Row>
          <OptionContainer
            selected={selected === "A"}
            onClick={() => setSelected("A")}
          >
            <Option>A</Option>
            <OptionText>O público-alvo do meu produto</OptionText>
          </OptionContainer>
          <OptionContainer
            selected={selected === "B"}
            onClick={() => setSelected("B")}
          >
            <Option>B</Option>
            <OptionText>O menor tipo de público do meu produto</OptionText>
          </OptionContainer>
        </Row>
        <Row>
          <OptionContainer
            selected={selected === "C"}
            onClick={() => setSelected("C")}
          >
            <Option>C</Option>
            <OptionText>
              Persona que meu projeto não pretende atingir
            </OptionText>
          </OptionContainer>
          <OptionContainer
            selected={selected === "D"}
            onClick={() => setSelected("D")}
          >
            <Option>D</Option>
            <OptionText>O público-alvo do meu produto</OptionText>
          </OptionContainer>
        </Row>
      </OptionsContainer>
    </Container>
  );
};

export default MCOptions;
