import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;

  span {
    color: ${(props) => props.theme.primary};
  }

  span:first-child {
    width: 60px;
    cursor: pointer;
  }

  span:nth-of-type(2n) {
    text-align: center;
    width: 100%;
    margin-left: -60px;
    z-index: -1;

    font-size: 36px;
    line-height: 52px;
  }
`;
