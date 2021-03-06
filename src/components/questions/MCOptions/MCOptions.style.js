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
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 20px;
`;

export const OptionContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 5px;

  ${(props) =>
    props.selected &&
    css`
      border: 1px solid ${(props) => props.theme.primary};
      border-radius: 10px;
    `}
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 50%;
  height: 40px;
  width: 40px;
  min-width: 40px;
  font-size: 18px;
  color: ${(props) => props.theme.primary};
`;

export const OptionText = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.primary};
`;
