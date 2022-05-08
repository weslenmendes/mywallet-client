import styled from "styled-components";

const TextButton = (props) => {
  return <TextButtonStyled {...props}>{props.children}</TextButtonStyled>;
};

const TextButtonStyled = styled.button`
  font-family: "Raleway";
  font-weight: 700;
  font-size: 0.938rem;
  line-height: 1.125rem;

  margin-top: 2rem;
  width: max-content;
  padding: 0.688rem 0;
  background: transparent;
  outline: none;
  border: none;
`;

export { TextButton };
