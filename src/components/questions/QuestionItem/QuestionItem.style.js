import styled from "styled-components";
import { StyledButton } from "../../Button/Button.style";

export const Container = styled.div`
  padding-right: 30px;
  width: 100%;
  margin-top: 40px;
`;

export const Header = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;

  & > div:first-of-type {
    margin-bottom: 28px;
  }

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > strong {
      font-size: 1.25rem;
      color: ${(props) => props.theme.primary};
    }
  }

  span {
    text-align: center;
    font-size: 1.5rem;
    color: ${(props) => props.theme.shadowColor};
  }
`;

export const QuestionHeader = styled.div`
  padding: 16px 12px;
  background-color: ${(props) => props.theme.questionBackground};
  border: 1px solid ${(props) => props.theme.black};
  border-bottom: none;
`;

export const QuestionNumber = styled.span`
  font-size: 1.5rem;
  line-height: 35px;
  color: ${(props) => props.theme.secondary};
`;

export const QuestionText = styled.span`
  font-size: 1.125rem;
  line-height: 26px;
  color: ${(props) => props.theme.black};
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 32px;

  & ${StyledButton} {
    border-radius: 8px;
    font-family: inherit;
    height: 40px;

    &:hover {
      background-color: ${(props) => props.theme.secondaryBackground};
    }

    &:not(:disabled) {
      background-color: ${(props) => props.theme.secondaryBackground};
      color: ${(props) => props.theme.white};
      border-color: ${(props) => props.theme.primary};
    }
  }
`;

export const ExitButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${(props) => props.theme.primary};
  :hover{
    cursor: pointer;
  }
`

export const CountdownText = styled.span`
  font-size: 2.25rem;
  color: ${(props) => (props.fail ? props.theme.error : props.theme.primary)};
`;