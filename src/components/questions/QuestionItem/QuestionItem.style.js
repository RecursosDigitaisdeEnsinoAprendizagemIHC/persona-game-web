import styled from "styled-components";

export const Container = styled.div`
  padding-right: 30px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  margin-top: 40px;
  margin-bottom: 40px;

  span {
    text-align: center;
    font-size: 36px;
    line-height: 52px;
    color: ${(props) => props.theme.secondary};
  }

  span:first-child {
    width: 20%;
    cursor: pointer;
  }

  span:nth-of-type(2n) {
    width: 80%;
  }
`;

export const QuestionNumber = styled.span`
  font-size: 24px;
  line-height: 35px;
  color: ${(props) => props.theme.secondary};
`;

export const QuestionText = styled.span`
  font-size: 18px;
  line-height: 26px;
  color: ${(props) => props.theme.primary};
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 50px;
`;
