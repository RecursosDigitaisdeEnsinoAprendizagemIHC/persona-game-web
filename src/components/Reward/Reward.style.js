import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.span`
  font-size: 18px;
  line-height: 26px;
  text-align: center;

  color: ${(props) => props.theme.secondary};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 15px;
`;

export const CardIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  min-width: 50px;
  height: 50px;

  border: 1px solid ${(props) => props.theme.secondary};
  box-sizing: border-box;
  border-radius: 10px;

  img {
    width: 80%;
    height: auto;
    max-height: 95%;
    object-fit: contain;
  }
`;

export const Text = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => props.theme.secondary};
`;
