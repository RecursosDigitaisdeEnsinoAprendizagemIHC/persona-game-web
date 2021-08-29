import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 800px;
  max-width: 1200px;

  @media (max-width: 1200px) {
    max-width: 1000px;
  }

  @media (max-width: 900px) {
    min-width: 500px;
    max-width: 800px;
  }

  @media (max-width: 600px) {
    min-width: 360px;
    max-width: 95%;
  }
`;
