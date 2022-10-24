import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import HeadTitle from "../subComponents/HeadTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100vw;
`;

const Main = styled.div`
  align-items: center;
  backdrop-filter: blur(4px);
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  display: flex;
  font-family: "Ubuntu Mono", monospace;
  font-size: calc(0.6rem + 1vw);
  height: 50vh;
  justify-content: center;
  left: calc(35rem + 6vw);
  line-height: 1.4;
  padding: 2rem;
  position: absolute;
  top: 16rem;
  width: 50vw;
  z-index: 3;
`;

const AboutMePage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Main>
          I'm a Front-End Web Developer based in Mtl, Canada. As a career
          changer, I bring a background in Fashion Design and Technical Support
          knowledge.
          <br /> <br />
          I'm a detail-oriented individual with a taste for beautiful websites.
          I am always interested in new technologies and this is what drives me
          the most.
          <br /> <br />
          You can connect with me via social links.
        </Main>
        <HeadTitle text="ABOUT" top="16%" left="60%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutMePage;
