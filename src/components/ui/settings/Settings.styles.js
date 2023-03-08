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
  width: 400px;
  padding: 0 24px 16px 0;
  margin-bottom: 24px;
  border-bottom: ${(props) => `2px solid ${props.theme.primary}`};

  & > span:first-child  {
    font-size: 1.75rem;
    margin-right: 24px;
    color: ${(props) => props.theme.black}
  }
`;