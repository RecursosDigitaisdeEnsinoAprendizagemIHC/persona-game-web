import styled from "styled-components";


export const TooltipContainer = styled.div`
  height: 100%;
  width: 15%;
  span {
    color: ${(props) => props.theme.primary};
    display: flex;
    margin-left: 20%;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 60px;
    cursor: pointer;
  }
  span:hover {
    opacity: 20%;
  }
`;



export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 40px;
  h2{
    color: ${(props) => props.theme.primary};
    text-align: center;
    width: 100%;
    margin-right:15%;
    z-index: -1;

    font-size: 36px;
    line-height: 52px;
  }
`;
