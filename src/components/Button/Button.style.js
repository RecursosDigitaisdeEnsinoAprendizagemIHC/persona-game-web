import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  width: 160px;
  height: 50px;

  border: 2px solid
    ${(props) => (props.color ? props.theme[props.color] : props.theme.primary)};
  box-sizing: border-box;
  border-radius: 20px;
  background: white;
  cursor: pointer;

  font-family: "shrikhand";
  font-size: 18px;
  line-height: 26px;
  color: ${(props) =>
    props.color ? props.theme[props.color] : props.theme.primary};

  ${(props) =>
    props.active &&
    css`
      color: white;
      background: ${(props) =>
        props.color ? props.theme[props.color] : props.theme.primary};
    `}
`;
