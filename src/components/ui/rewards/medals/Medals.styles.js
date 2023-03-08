import styled, { css } from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.span`
  font-size: 1.5rem;
  line-height: 35px;
  color: ${(props) => props.theme.primary};
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  width: 30px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 40px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-top: 20px;
`;

export const MedalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MedalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  z-index: -1;

  img {
    width: 80px;
    height: 80px;
  }

  ${(props) =>
    props.locked &&
    css`
      box-sizing: border-box;
      filter: blur(6px);
    `}
`;

export const MedalText = styled.div`
  font-size: 1.125rem;
  line-height: 26px;
  color: ${(props) => props.theme.secondary};
`;
