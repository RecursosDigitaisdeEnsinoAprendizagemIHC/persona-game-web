import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 40px;
  width: 500px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const IconContainer = styled.div`
  margin-right: 20px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  font-size: 18px;
  line-height: 26px;
  color: ${(props) => props.theme.secondary};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
