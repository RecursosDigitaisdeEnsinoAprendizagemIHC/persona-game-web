import styled from "styled-components";

export const Step = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;

  border-radius: 50%;
  border: 3px solid ${(props) => props.locked ? '#828282' : props.theme.primary};
  box-sizing: border-box;

  font-size: 24px;
  line-height: 35px;
  color: ${(props) => props.theme.primary};
  cursor: pointer;

  :hover{
    background-color: ${(props) => !props.locked && 'rgba(169, 4, 191, 0.15)'};
  }
`;
