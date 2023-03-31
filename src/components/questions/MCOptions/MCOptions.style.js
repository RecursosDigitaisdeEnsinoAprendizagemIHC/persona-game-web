import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 50px;
`;

export const OptionsContainer = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme.black};
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Option = styled.div`
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
  :hover{
    background-color: rgba(169, 4, 191, 0.40);
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 12px 8px;
  width: 98%;

  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.black};
  }

  &:hover {
    & > ${Option} {
      background-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.primaryBackground};
    }
  }

  ${(props) =>
    props.selected &&
    css`
      & > ${Option} {
        background-color: ${(props) => props.theme.primary};
        color: ${(props) => props.theme.primaryBackground};
      }
    `}
`;

export const OptionText = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme.black};
`;
