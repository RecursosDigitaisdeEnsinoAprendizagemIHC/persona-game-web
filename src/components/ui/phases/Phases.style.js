import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const HeaderBtn = styled.div`
  width: 80px;
  cursor: pointer;
  z-index: 1;
`;

export const HeaderTitle = styled.div`
  flex: 1;
  text-align: center;
  margin: 0 0 0 -80px;

  font-size: 3rem;
  line-height: 70px;
  color: ${(props) => props.theme.primary};
`;
