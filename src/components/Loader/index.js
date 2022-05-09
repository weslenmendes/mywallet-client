import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

const Loader = (props) => {
  const { height, width, color } = props;

  return (
    <LoaderStyled>
      <ThreeDots type="ThreeDots" color={color} height={height} width={width} />
    </LoaderStyled>
  );
};

const LoaderStyled = styled.div`
  opacity: 0.7;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Loader };
