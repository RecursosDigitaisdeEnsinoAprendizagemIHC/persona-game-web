import React from "react";

// components
import { StyledButton } from "./Button.style";

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
