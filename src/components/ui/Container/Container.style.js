import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 1000px;
  max-width: 1000px;

  @media (max-width: 900px) {
    min-width: 800px;
    max-width: 800px;
  }

  @media (max-width: 600px) {
    min-width: 550px;
    max-width: 550px;
  }
`;
