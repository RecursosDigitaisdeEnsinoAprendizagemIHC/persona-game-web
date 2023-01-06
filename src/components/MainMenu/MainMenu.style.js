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
    font-size: 44px;
  }

  & > p {
    font-size: 20px;
    max-width: 350px;
    margin-bottom: 64px;
  }
`;

export const MenuActions = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 24px;
`;

export const SettingsButton = styled.button``;

export const HelpButton = styled.button`
  background: ${(props) => props.theme.primary};
  border-radius: 4px;
  width: 56px;
  height: 40px;
`;

export const MenuActionsOptions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 64px;
  align-items: center;
`