import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  min-width: 250px;
  padding-top: 30px;

  border-left: 3px solid ${(props) => props.theme.primary};
`;

export const QuestionItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 50px;
  width: 195px;
  background: #ffffff;
  color: ${(props) => props.theme.primary};
  border: 2px solid ${(props) => props.theme.primary};
  border-radius: 20px;

  ${(props) =>
    props.color &&
    css`
      background: ${(props) => props.theme[props.color]};
      border-color: ${(props) => props.theme[props.color]};
      color: #ffffff;
    `};

  ${(props) =>
    props.active &&
    css`
      background: ${(props) => props.theme.primary};
      color: #ffffff;
    `};

  font-size: 1.125rem;
  line-height: 26px;
`;

export const CountdownText = styled.span`
  font-size: 2.25rem;
  line-height: 52px;
  color: ${(props) => (props.fail ? props.theme.error : props.theme.primary)};
`;
