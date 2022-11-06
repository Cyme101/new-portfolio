import styled from "styled-components";
import { mediaQueries } from "../components/Themes";

const Text = styled.h1`
  color: ${(props) => `rgba(${props.theme.textRgba},0.1)`};
  font-size: calc(5rem + 5vw);
  left: ${(props) => props.left};
  position: fixed;
  right: ${(props) => props.right};
  top: ${(props) => props.top};
  z-index: 0;

  ${mediaQueries(20)`
    font-size: 2rem;
  `};
`;

const HeadTitle = (props) => {
  return (
    <Text left={props.left} right={props.right} top={props.top}>
      {props.text}
    </Text>
  );
};

export default HeadTitle;
