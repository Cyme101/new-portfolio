import React from "react";
import styled from "styled-components";

const Text = styled.h1`
  color: ${(props) => `rgba(${props.theme.textRgba},0.1)`};
  font-size: calc(5rem + 5vw);
  left: ${(props) => props.left};
  position: fixed;
  right: ${(props) => props.right};
  top: ${(props) => props.top};
  z-index: 0;
`;

const HeadTitle = (props) => {
  return (
    <Text left={props.left} right={props.right} top={props.top}>
      {props.text}
    </Text>
  );
};

export default HeadTitle;
