import styled, { css } from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 30px;
`;

export const Tab = styled.div`
  font-size: 18px;
  line-height: 26px;
  color: ${(props) => props.theme.primary};
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      border-bottom: 3px solid ${(props) => props.theme.primary};
    `}
`;
