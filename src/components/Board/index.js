import styled from "styled-components";

const Board = (props) => {
  return (
    <BoardStyled result={props.balance}>
      {props.children}
      {props.balance && (
        <section>
          <h3>SALDO</h3>
          <p>
            {props.balance.toLocaleString("pt-br", {
              minimumFractionDigits: 2,
            })}
          </p>
        </section>
      )}
    </BoardStyled>
  );
};

const BoardStyled = styled.main`
  margin-top: 22px;
  padding: 15px 11px 10px 12px;
  background-color: var(--text);
  border-radius: 5px;
  box-sizing: border-box;
  max-height: calc(100vh - 248px);
  overflow-y: auto;
  position: relative;

  width: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: ${({ result }) => (result ? "space-between" : "center")};
  align-items: center;

  p {
    font-family: "Raleway";
    font-size: 20px;
    color: #868686;
    text-align: center;
    width: 180px;
  }

  section {
    height: 45px;
    width: 100%;
    background-color: #fff;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: sticky;
    bottom: -11px;
    left: 15px;
    right: 15px;

    h3 {
      font-family: "Raleway";
      font-weight: 700;
      font-size: 17px;
      line-height: 20px;
      color: #000;
      padding: 10px 0;
    }

    p {
      font-family: "Raleway";
      font-weight: 400;
      font-size: 17px;
      line-height: 20px;
      text-align: right;

      color: ${({ result }) => (result > 0 ? "#03ac00" : "#C70000")};
    }
  }
`;

export { Board };
