import { useEffect, useRef, lazy, Suspense } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme, mediaQueries } from "./Themes";
import { motion } from "framer-motion";

import Loading from "../subComponents/Loading";
import LogoComponent from "../subComponents/LogoComponent";
import { Projects } from "../data/ProjectsData";
import Card from "../subComponents/Card";
import { Arrows } from "./AllSvgs";

const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const HeadTitle = lazy(() => import("../subComponents/HeadTitle"));

const Box = styled(motion.div)`
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
  left: calc(10rem + 15vw);
  position: fixed;
  top: 10rem;

  ${mediaQueries(50)`
    left:calc(8rem + 15vw);
  `};

  ${mediaQueries(40)`
    top: 30%;
    left:calc(6rem + 15vw);
  `};

  ${mediaQueries(30)`
    left:calc(2rem + 15vw);
  `};

  ${mediaQueries(20)`
    left:calc(1rem + 15vw);
      }
  `};
`;

const Rotate = styled.span`
  bottom: 3rem;
  display: block;
  height: 60px;
  position: fixed;
  right: 3rem;
  width: 60px;
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
      <Suspense fallback={<Loading />}>
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
          <HeadTitle text="PROJECTS" top="60%" left="35%" />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default ProjectsPage;
