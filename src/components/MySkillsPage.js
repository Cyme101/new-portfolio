import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { LightTheme } from "./Themes";
import { Laptop } from "./AllSvgs";

import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import HeadTitle from "../subComponents/HeadTitle";

const Box = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.body};
  display: flex;
  height: 100vh;
  justify-content: center;
  position: relative;
  width: 100vw;
`;

const Main = styled.div`
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
`;

const Title = styled.h2`
  align-items: center;
  display: flex;
  font-size: calc(1em + 1vw);
  justify-content: center;
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
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Box>
        <SocialIcons theme="light" />
        <PowerButton />
        <Main>
          <Title>
            <Laptop width={40} height={40} /> Front-End Web Developer
          </Title>
          <Description>
            My motivation comes from creating visually appealing websites. It is
            new technologies that drive me the most.
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
        <HeadTitle text="SKILLS" top="77%" right="25%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
