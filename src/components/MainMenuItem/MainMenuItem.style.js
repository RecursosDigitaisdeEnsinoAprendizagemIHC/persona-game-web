import styled from "styled-components";

export const ItemContainer = styled.div`
  min-width: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 24px 34px;
  border-radius: 8px;

  cursor: pointer;

  box-sizing: border-box;

  background: ${(props) => props.theme.primary};

  & > svg {
    font-size: 32px;
  }
`;

export const ItemText = styled.span`
  font-size: 1.5rem;
  line-height: 44px;
  color: white;
  font-weight: bold;
`;
