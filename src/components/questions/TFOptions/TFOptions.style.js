import styled, { css } from "styled-components";

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 12px 8px;
  width: 98%;
  color: ${(props) => props.theme.black};

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${(props) => props.theme.black};
    border-radius: 50%;
    height: 40px;
    width: 40px;
    min-width: 40px;
    font-size: 1.25rem;
    color: ${(props) => props.theme.black};
  }

  &:hover {
    & > span {
      background-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.primaryBackground};
    }
  }

  ${(props) =>
    props.active &&
    css`
      & > span {
        background-color: ${(props) => props.theme.primary};
        color: ${(props) => props.theme.primaryBackground};
      }
    `}

    &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.black};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.black};
`;