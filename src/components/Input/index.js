import styled from "styled-components";

const Input = (props) => {
  return <InputStyled {...props} />;
};

const InputStyled = styled.input`
  font-family: "Raleway";
  font-weight: 400;
  font-size: 20px;
  color: var(--text-input);

  width: 100%;
  height: 58px;
  margin-top: 13px;
  padding: 18px 15px 17px 15px;
  background-color: var(--text);
  box-sizing: border-box;

  input:disabled {
    pointer-events: none;
    user-select: none;
    background: red;
  }

  input:placeholder {
    color: #000000 !important;
  }
`;

export { Input };
