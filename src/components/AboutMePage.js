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
  font-family: "Ubuntu Mono", sans-serif;
  font-size: calc(0.5rem + 1vw);
  height: 60vh;
  justify-content: center;
  left: calc(4rem + 6vw);
  line-height: 1.2;
  padding: 2rem;
  position: absolute;
  top: 12rem;
  width: 70vw;
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
          Bonjour-Hi, I'm Isabelle Vallerand.
          <br /> <br />
          A Front-End Web Developer based out of Mtl, Canada. I am from Quebec
          city and moved to Montreal a few years ago. I come from a Fashion
          Design background but I became interested in IT quickly. Over the past
          10 years, I've worked as a Support Analyst therefore problem-solving
          skills is in my DNA. My career change last year led me to learn how to
          code and I loved it.
          <br /> <br />
          I've enrolled in an intensive 9-weeks Full-Stack Web Development
          Bootcamp @ Le Wagon Montreal which I graduated in March 2022. The
          Front-End is where I like to challenge myself and create through code.
          <br /> <br />
          My motivation comes from creating visually appealing websites. It is
          new technologies that drive me the most.
          <br /> <br />
          I am also a cat mom.
          <br /> <br />
          You can connect with me via social links.
        </Main>
        <HeadTitle text="ABOUT" top="12%" left="60%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutMePage;
