import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  padding: 8px 12px;

  border: 2px solid
    ${(props) => (props.color ? props.theme[props.color] : props.theme.primary)};
  box-sizing: border-box;
  border-radius: 20px;
  background: ${(props) => props.theme.primaryBackground};
  cursor: pointer;

  font-size: 1.125rem;
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
