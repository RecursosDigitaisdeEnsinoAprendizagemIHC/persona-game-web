import styled from "styled-components";

export const TrailContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const TrailItem = styled.div`
  width: 8px;
  height: 8px;

  border-radius: 50%;
  background-color: ${(props) => props.theme.primary};
`;
