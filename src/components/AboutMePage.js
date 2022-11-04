import { lazy, Suspense } from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import { DarkTheme, mediaQueries } from "./Themes";
import Loading from "../subComponents/Loading";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

const HeadTitle = lazy(() => import("../subComponents/HeadTitle"));

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100vw;
`;

const Main = styled(motion.div)`
  align-items: center;
  backdrop-filter: blur(4px);
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  display: flex;
  font-family: "Ubuntu Mono", sans-serif;
  font-size: calc(0.6rem + 1vw);
  height: 60vh;
  justify-content: center;
  left: calc(10rem + 5vw);
  line-height: 1.2;
  padding: 2rem;
  position: absolute;
  top: 11rem;
  width: 50vw;
  z-index: 3;

  ${mediaQueries(40)`
    height: 50vh;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    width: 60vw;
  `};

  ${mediaQueries(30)`
    backdrop-filter: none;
    height: auto;
    margin-top:2rem;
    width: 50vw;
  `};

  ${mediaQueries(20)`
    font-size: calc(0.5rem + 1vw);
    padding: 1rem;
  `};
`;

const AboutMePage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Suspense fallback={<Loading />}>
        <Box>
          <LogoComponent theme="dark" />
          <SocialIcons theme="dark" />
          <PowerButton />

          <Main>
            Bonjour-Hi, I'm Isabelle Vallerand.
            <br /> <br />
            A Front-End Web Developer based out of Mtl, Canada. I am from Quebec
            city and moved to Montreal a few years ago. I come from a Fashion
            Design background but I became interested in IT quickly. Over the
            past 10 years, I've worked as a Support Analyst therefore
            problem-solving skills is in my DNA. My career change last year led
            me to learn how to code and I loved it.
            <br /> <br />
            I've enrolled in an intensive 9-weeks Full-Stack Web Development
            Bootcamp @ Le Wagon Montreal which I graduated in March 2022. The
            Front-End is where I like to challenge myself and create through
            code.
            <br /> <br />
            I am also a cat mom.
            <br /> <br />
          </Main>
          <HeadTitle text="ABOUT" top="12%" right="15%" />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default AboutMePage;
