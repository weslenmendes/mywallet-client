import styled from "styled-components";

const Separator = (props) => {
  return <SeparatorStyled width={props.width} height={props.height} />;
};

const SeparatorStyled = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export { Separator };
