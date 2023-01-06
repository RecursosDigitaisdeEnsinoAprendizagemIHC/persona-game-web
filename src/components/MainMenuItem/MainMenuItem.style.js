import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 220px;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 24px 34px;
  border-radius: 8px;

  cursor: pointer;

  box-sizing: border-box;
  background: #ffffff;

  background: ${(props) => props.theme.primary};
`;

export const ItemText = styled.span`
  font-size: 24px;
  line-height: 44px;
  color: white;
  font-weight: bold;
`;
