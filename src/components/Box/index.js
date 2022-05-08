import styled from "styled-components";

const Box = (props) => {
  return (
    <BoxStyled bgButtonColor={props.bgButtonColor}>{props.children}</BoxStyled>
  );
};

const BoxStyled = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: "Raleway";
    font-weight: 700;
    font-size: 1.625rem;
    line-height: 1.908rem;
  }

  svg {
    height: 24px;
    width: 23px;
  }

  button {
    background: ${({ bgButtonColor }) => bgButtonColor || "transparent"};
  }
`;

export { Box };
