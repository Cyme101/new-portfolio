import React, { useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import HeadTitle from "../subComponents/HeadTitle";
import { Projects } from "../data/ProjectsData";
import Card from "../subComponents/Card";

const Box = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.body};
  display: flex;
  height: 400vh;
  position: relative;
`;

const Main = styled(motion.ul)`
  color: white;
  display: flex;
  height: 40vh;
  left: calc(3rem + 6vw);
  position: fixed;
  top: 12rem;
`;

// Framer-motion Configuration
const Container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const ProjectsPage = () => {
  const ref = useRef(null);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <Main ref={ref} variants={Container} initial="hidden" animate="show">
          {Projects.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <HeadTitle text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default ProjectsPage;
