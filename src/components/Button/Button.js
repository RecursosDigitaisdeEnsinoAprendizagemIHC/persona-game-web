import React from "react";
import { Tooltip } from 'react-tippy';

// components
import { StyledButton } from "./Button.style";

const Button = ({ children, TooltipText, ...props }) => {
  return(
    <Tooltip
      title={TooltipText}
      position="bottom"
      animation="fade"
      theme="transparent"
      distance={2}
    >
      <StyledButton {...props}>{children}</StyledButton>
    </Tooltip>
  )
};

export default Button;
