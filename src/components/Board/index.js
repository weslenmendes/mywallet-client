import styled from "styled-components";

const Board = (props) => {
  return <BoardStyled>{props.children}</BoardStyled>;
};

const BoardStyled = styled.main`
  margin-top: 22px;
  padding: 23px 11px 10px 12px;
  background-color: var(--text);
  border-radius: 5px;
  box-sizing: border-box;

  width: 100%;
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: "Raleway";
    font-size: 20px;
    color: #868686;
    text-align: center;
    width: 180px;
  }
`;

export { Board };
