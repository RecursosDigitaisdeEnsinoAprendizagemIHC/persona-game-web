import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 50px;
  margin-bottom: 100px;
`;

export const ContentItem = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ItemDot = styled.div`
  width: 15px;
  min-width: 15px;
  height: 15px;
  min-height: 15px;

  margin-top: 3px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.primary};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 30px;
`;

export const ContentTitle = styled.span`
  font-size: 1.25rem;
  color: ${(props) => props.theme.black};
`;

export const ContentDescription = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme.primary};
  line-height: 22px;
`;
