import styled from "styled-components";
import LogoSrc from "../assets/svg/logo-branding.svg";
import { LightTheme } from "../components/Themes";

export const Logo = styled.img`
  color: ${(props) =>
    props.color === "light" ? LightTheme.text : LightTheme.body};
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
