import styled from "styled-components";

const Container = (props) => {
  return (
    <ContainerStyled justifyContent={props.justifyContent}>
      {props.children}
    </ContainerStyled>
  );
};

const ContainerStyled = styled.section`
  padding: 25px;
  height: calc(100vh - 50px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};

  form {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-bottom: 30px;
    }
  }
`;

export { Container };
