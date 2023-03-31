import React from "react";

// components
import {
  OptionsContainer,
  OptionContainer,
  Option,
  OptionText,
} from "./MCOptions.style";

const MCOptions = ({ options, selected, setSelected }) => {
  return (
    <OptionsContainer>
      {options.map(option => (
        <OptionContainer
          key={option.id}
          selected={selected === option.option}
          onClick={() => setSelected(option.option)}
        >
          <Option>{option.option}</Option>
          <OptionText>{option.description}</OptionText>
        </OptionContainer>
      ))}
    </OptionsContainer>
  );
};

export default MCOptions;
