import React from "react";
import styled from "styled-components";
import LogoSrc from "../assets/img/logo.png";
import { LightTheme, DarkTheme } from "../components/Themes";

export const Logo = styled.img`
  color: ${(props) =>
    props.color === "dark" ? LightTheme.text : LightTheme.body};
  display: inline-block;
  height: 50px;
  left: 2rem;
  position: fixed;
  top: 2rem;
  width: 50px;
  z-index: 4;
`;

export const LogoWhite = styled.img`
  color: ${(props) =>
    props.color === "light" ? DarkTheme.text : DarkTheme.body};
  display: inline-block;
  height: 50px;
  left: 2rem;
  position: fixed;
  top: 2rem;
  width: 50px;
  z-index: 4;
`;

const LogoComponent = (props) => {
  return <Logo color={props.theme} src={LogoSrc} />;
};

export default LogoComponent;
