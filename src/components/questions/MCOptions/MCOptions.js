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

const CHUNK_SIZE = 2;

const MCOptions = ({ options, selected, setSelected }) => {
  const arrayChunk = (arr) => {
    const newArr = [];
    for (let i = 0; i < options.length / CHUNK_SIZE; i++) {
      const startIndex = i * CHUNK_SIZE;
      newArr.push(arr.slice(startIndex, startIndex + CHUNK_SIZE));
    }
    return newArr;
  };

  return (
    <Container>
      <OptionsContainer>
        {arrayChunk(options).map((subOptions, index) => (
          <Row key={index}>
            {subOptions.map((option) => (
              <OptionContainer
                key={option.id}
                selected={selected === option.option}
                onClick={() => setSelected(option.option)}
              >
                <Option>{option.option}</Option>
                <OptionText>{option.description}</OptionText>
              </OptionContainer>
            ))}
          </Row>
        ))}
      </OptionsContainer>
    </Container>
  );
};

export default MCOptions;
