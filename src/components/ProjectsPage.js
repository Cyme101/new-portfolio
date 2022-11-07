import { useEffect, useRef, lazy, Suspense } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme, mediaQueries } from "./Themes";
import { motion } from "framer-motion";
import Loading from "../subComponents/Loading";
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
  color: #fffdfa;
  display: flex;
  height: 40vh;
  left: calc(10rem + 15vw);
  position: fixed;
  top: 10rem;

  ${mediaQueries(50)`
    left: calc(8rem + 15vw);
  `};

  ${mediaQueries(40)`
    top: 20%;
    left: calc(6rem + 15vw);
  `};

  ${mediaQueries(30)`
    left: calc(2rem + 15vw);
  `};

  ${mediaQueries(20)`
    left: calc(1rem + 15vw);
      }
  `};
`;

const Rotate = styled.span`
  bottom: 2rem;
  display: block;
  height: 70px;
  position: fixed;
  right: 2rem;
  width: 70px;
  z-index: 1;

  ${mediaQueries(40)`
    width: 60px;
    height: 60px;   
      svg{
        width: 60px;
        height: 60px;
      }
  `};

  ${mediaQueries(25)`
    width: 50px;
    height: 50px;
      svg{
        width: 50px;
        height: 50px;
      }
  `};
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
        <Box
          key="projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <PowerButton />
          <SocialIcons theme="dark" />
          <Main ref={ref} variants={Container} initial="hidden" animate="show">
            {Projects.map((d) => (
              <Card key={d.id} data={d} />
            ))}
          </Main>
          <HeadTitle text="PROJECTS" top="10%" left="20%" />
          <Rotate ref={arrows}>
            <Arrows width={70} height={70} fill={DarkTheme.text} />
          </Rotate>
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default ProjectsPage;
