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

  :hover{
    background: ${(props) => props.color === "primary" ? 'rgba(169, 4, 191, 0.40)' : 'rgba(3, 49, 140, 0.40)'};
  }

  font-family: "shrikhand";
  font-size: 18px;
  line-height: 26px;
  color: ${(props) =>
    props.color ? props.theme[props.color] : props.theme.primary};

  ${(props) =>
    props.disabled &&
    css`
      border-color: ${(props) => props.theme.lightGray};
      color: ${(props) => props.theme.lightGray};
    `}

  ${(props) =>
    props.active &&
    css`
      color: white;
      background: ${(props) =>
        props.color ? props.theme[props.color] : props.theme.primary};
    `}
`;
