import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import HeadTitle from "../subComponents/HeadTitle";
import { Projects } from "../data/ProjectsData";
import Card from "../subComponents/Card";
import { Arrows } from "./AllSvgs";

const Box = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.body};
  display: flex;
  height: 400vh;
  position: relative;
`;

const Main = styled(motion.ul)`
  color: #f1eadc;
  display: flex;
  height: 40vh;
  left: calc(5rem + 15vw);
  position: fixed;
  top: 10rem;
`;

const Rotate = styled.span`
  bottom: 3rem;
  display: block;
  height: 70px;
  position: fixed;
  right: 3rem;
  width: 70px;
  z-index: 1;
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
  const arrows = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (arrows.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

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
        <Rotate ref={arrows}>
          <Arrows width={70} height={70} fill={DarkTheme.text} />
        </Rotate>
        <HeadTitle text="PROJECTS" top="55%" right="35%" />
      </Box>
    </ThemeProvider>
  );
};

export default ProjectsPage;
