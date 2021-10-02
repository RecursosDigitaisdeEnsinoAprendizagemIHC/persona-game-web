import styled, { css } from "styled-components";

export const Title = styled.div`
  font-size: 24px;
  line-height: 35px;
  color: ${(props) => props.theme.primary};
  margin-top: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 20px;
  margin-bottom: 50px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 30px;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  width: 30px;
  margin-top: 20px;
`;

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 10px;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

export const LargeReward = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 100px;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 10px;
  padding: 10px 20px;
`;

export const Reward = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  min-height: 130px;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 10px;
  padding: 10px 20px;
`;

export const RewardContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex: 1;

  ${(props) =>
    props.locked &&
    css`
      box-sizing: border-box;
      filter: blur(6px);
    `}
`;

export const LockedBackground = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;
`;

export const RewardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  min-width: 70px;
  height: 70px;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 10px;

  img {
    width: 90%;
    object-fit: contain;
  }
`;

export const RewardName = styled.span`
  font-size: 16px;
  line-height: 21px;
  color: ${(props) => props.theme.secondary};
`;

export const RewardText = styled.span`
  font-size: 16px;
  line-height: 21px;
  color: ${(props) => props.theme.primary};
`;
