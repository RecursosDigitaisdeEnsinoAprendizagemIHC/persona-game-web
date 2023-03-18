import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  color: ${(props) => props.theme.primary};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;

  background-color: ${(props) => props.theme.secondaryBackground};
  color: white;
  border: 2px solid ${(props) => props.theme.primary};

  span {
    padding-left: 20px;
  }

  span:first-child {
    width: 30%;
  }

  span:nth-child(2n) {
    width: 70%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  border-left: 2px solid ${(props) => props.theme.primary};
  border-right: 2px solid ${(props) => props.theme.primary};
  border-bottom: 2px solid ${(props) => props.theme.primary};

  div {
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  div:first-child {
    width: 30%;

    border-right: 2px solid ${(props) => props.theme.primary};
  }

  div:nth-child(2n) {
    width: 70%;
  }
`;

export const ListItem = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
`;

export const AuthorReference = styled.div`
  align-self: center;
  margin-top: 5px;
`;
