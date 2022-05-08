import styled from "styled-components";

const BoxButton = (props) => {
  return <BoxButtonStyled {...props}>{props.children}</BoxButtonStyled>;
};

const BoxButtonStyled = styled.button`
  width: 155px;
  height: 114px;
  margin-top: 13px;
  padding: 9px;
  background-color: #a328d6;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-family: "Raleway";
    font-size: 17px;
    font-weight: 700;
    width: 45px;
    margin-top: 31px;
  }

  svg {
    height: 25px;
    width: 25px;
  }
`;

export { BoxButton };
