import styled from "styled-components";

export const Container = styled.div`
  width: 100vh;
  height: 100%;
  z-index: 1001;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: rgba(229, 229, 229, 0.15);
`;

export const Card = styled.div`
  width: 500px;
  height: 300px;
  border-radius: 10px;
  background-color: #FFFFFF;
  z-index: 1002;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 3px 3px 3px black
`;

export const CardContent = styled.div`
  width: 100%;
  display: flex;
  padding-left: 40px;
  margin-bottom: 101px;
  gap: 37px;
`;

export const Title = styled.h3`
  color: #03318C;
  margin-bottom: 8px;
  margin-top: 8px;
`;

export const AlertImg = styled.img`
  /* padding-bottom: 98px; */
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 24px;
`;