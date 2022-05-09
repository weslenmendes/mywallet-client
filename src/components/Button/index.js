import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

const Button = (props) => {
  return (
    <ButtonStyled {...props} disabled={props.disabled}>
      {!props.isLoading === true ? (
        props.children
      ) : (
        <Loader>
          <ThreeDots type="ThreeDots" color="white" height={20} width={50} />
        </Loader>
      )}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 23.48px;

  width: 100%;
  margin-top: 13px;
  padding: 15px 0 16px 0;
  text-align: center;
  background: var(--primary-light);

  button:disabled {
    pointer-events: none;
    cursor: not-allowed;
  }
`;

const Loader = styled.div`
  background-color: #a328d6;
  opacity: 0.7;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Button };
