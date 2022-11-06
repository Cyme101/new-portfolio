import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";
import { LightTheme } from "./Themes";
import { mediaQueries } from "./Themes";

import Loading from "../subComponents/Loading";
import { Laptop } from "./AllSvgs";

const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));

const HeadTitle = lazy(() => import("../subComponents/HeadTitle"));

const Box = styled(motion.div)`
  align-items: center;
  background-color: ${(props) => props.theme.body};
  display: flex;
  height: 100vh;
  justify-content: center;
  position: relative;
  width: 100vw;

  ${mediaQueries(50)`
    flex-direction:column;  
    padding:8rem 0;
    height:auto;
    &>*:nth-child(5){
      margin-bottom:5rem;
    }   
  `};

  ${mediaQueries(30)` 
    &>*:nth-child(5){
      margin-bottom:4rem;
    } 
  `};
`;

const Main = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: "Ubuntu Mono", monospace;
  height: 60vh;
  justify-content: space-between;
  line-height: 1.2;
  opacity: 0.8;
  padding: 2rem;
  width: 30vw;
  z-index: 3;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }

  ${mediaQueries(60)`
    height: 55vh;
  `};

  ${mediaQueries(50)`
    width: 50vw;
    height: max-content;
  `};
`;

const Title = styled.h2`
  align-items: center;
  display: flex;
  font-size: calc(1em + 1vw);
  justify-content: center;

  ${mediaQueries(60)`
    font-size:calc(0.8em + 1vw);
  `};

  ${mediaQueries(50)`
    font-size:calc(1em + 2vw);
    margin-bottom:1rem;
  `};

  ${mediaQueries(30)`
    font-size:calc(1em + 1vw);
  `};

  ${mediaQueries(25)`
    font-size:calc(0.8em + 1vw);
      svg{
        width:30px;
        height:30px;
      }
  `};

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
    padding-top: 0.5rem;
  }

  ${mediaQueries(50)`
    font-size: calc(0.8em + 1vw);
  `};

  ${mediaQueries(30)`
    font-size:calc(0.7em + 1vw);
  `};

  ${mediaQueries(25)`
    font-size:calc(0.5em + 1vw);
  `};
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Suspense fallback={<Loading />}>
        <Box>
          <SocialIcons theme="light" />
          <PowerButton />
          <Main>
            <Title>
              <Laptop width={40} height={40} /> Front-End Web Developer
            </Title>
            <Description>
              My motivation comes from creating visually appealing websites. It
              is new technologies that drive me the most.
            </Description>
            <Description>
              <strong>Skills</strong>
              <p>
                HTML, CSS, JavaScript, ReactJS, styled-components, Bootstrap,
                Ruby, Ruby on Rails & Figma.
              </p>
            </Description>
            <Description>
              <strong>Tools</strong>
              <p>GitHub & VSCode.</p>
            </Description>
          </Main>
          <HeadTitle text="SKILLS" top="75%" right="10%" />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default MySkillsPage;
