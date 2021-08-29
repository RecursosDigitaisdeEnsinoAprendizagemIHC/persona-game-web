import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 85px;
  width: 100%;
  box-shadow: 0px 0px 22px;
  background: ${(props) => props.theme.primary};
`;

export const HeaderTitle = styled.p`
  font-size: 32px;
  line-height: 47px;
  color: #ffffff;
  text-shadow: 0px 0px 22px rgba(5, 199, 242, 0.74);
`;
