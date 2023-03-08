import styled from "styled-components";

export const MainMenuContainer = styled.div`
  flex: 1;
  display: flex;
`;

export const MenuGamePresentation = styled.div`
  width: 50%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background: ${(props) => props.theme.primary};

  & > h1 {
    font-size: 2.75rem;
  }

  & > p {
    font-size: 1.25rem;
    max-width: 350px;
    margin-bottom: 64px;
  }
`;

export const MenuActions = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 64px;
  align-items: center;
`;