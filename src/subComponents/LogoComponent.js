import React from "react";
import styled from "styled-components";
import LogoSrc from "../assets/img/logo.png";

export const Logo = styled.img`
  display: inline-block;
  height: 50px;
  left: 2rem;
  position: fixed;
  top: 2rem;
  width: 50px;
  z-index: 4;
`;

const LogoComponent = () => {
  return <Logo src={LogoSrc} />;
};

export default LogoComponent;
