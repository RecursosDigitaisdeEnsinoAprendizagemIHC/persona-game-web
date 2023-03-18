import styled from "styled-components";

export const FixedButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  right: 0;
  height: 100vh;
  padding: 24px;
`;

export const SettingsButton = styled.button``;

export const HelpButton = styled.button`
  background: ${(props) => props.theme.secondaryBackground};
  border: 1px solid white;
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