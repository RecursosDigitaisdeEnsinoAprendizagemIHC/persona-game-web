import styled from "styled-components";

import Container from "../Container/Container";

export const PreferenceContainer = styled(Container)`
  align-items: center;

  & > div:first-child {
    width: 100%;
  }
`;

export const Preference = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 48px;
  padding: 0 24px;
  margin-bottom: 24px;
  border-bottom: ${(props) => `2px solid ${props.theme.primary}`};

  & > span {
    font-size: 28px;
    margin-right: 24px;
    color: ${(props) => props.theme.black}
  }
`;