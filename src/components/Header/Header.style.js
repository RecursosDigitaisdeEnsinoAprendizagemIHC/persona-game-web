import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 85px;
  width: 100%;
  box-shadow: ${(props) => `0px 0px 22px ${props.theme.shadowColor}`};
  background: ${(props) => props.theme.secondaryBackground};
  position: fixed;
`;

export const HeaderTitle = styled.p`
  font-size: 2rem;
  line-height: 47px;
  color: ${(props) => props.theme.white};
  font-weight: bold;
`;

export const HeaderSpace = styled.div`
  height: 85px;
`
