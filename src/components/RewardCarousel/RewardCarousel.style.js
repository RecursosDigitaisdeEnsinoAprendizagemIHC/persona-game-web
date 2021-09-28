import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 15px;
`;

export const RewardContainer = styled.div`
  border: 1px solid ${(props) => props.theme.secondary};
  border-radius: 10px;
  box-sizing: border-box;

  width: 100%;
  padding: 10px 20px;
  padding-bottom: 40px;
`;

export const DotContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.secondary};
  background: ${(props) => (props.active ? props.theme.secondary : "white")};
  cursor: pointer;
`;
