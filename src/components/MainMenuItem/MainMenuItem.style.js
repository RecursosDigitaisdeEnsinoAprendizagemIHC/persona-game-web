import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 200px;
  height: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 13px;
  cursor: pointer;

  border: 6px solid ${(props) => props.theme.primary};
  box-sizing: border-box;
  box-shadow: 0px 0px 22px rgba(169, 4, 191, 0.74);
  background: #ffffff;
`;

export const ItemText = styled.span`
  font-size: 30px;
  line-height: 44px;
  color: ${(props) => props.theme.primary};
`;
