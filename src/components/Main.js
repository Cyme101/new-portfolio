import React, { lazy, Suspense, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import img from "../assets/img/logo.png";
import Intro from "./Intro";

import Loading from "../subComponents/Loading";
import { mediaQueries } from "./Themes";

const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const SocialIcons = lazy(() => import("./../subComponents/SocialIcons"));

const MainContainer = styled(motion.div)`
  background: ${(props) => props.theme.body};
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100vw;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;

    h2 {
      ${mediaQueries(40)`
      font-size: 1.2em;
  `};

      ${mediaQueries(30)`
      font-size: 1em;
  `};
    }
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled.a`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  cursor: pointer;
  position: absolute;
  right: calc(1rem + 2vw);
  text-decoration: none;
  top: 2rem;
  z-index: 1;
`;

const PROJECTS = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  right: calc(0.25rem + 2vw);
  text-decoration: none;
  top: 50%;
  transform: rotate(90deg) translate(-50%, -50%);
  z-index: 1;

  @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
  }
`;

const BottomBar = styled.div`
  bottom: 1rem;
  display: flex;
  justify-content: space-evenly;
  left: 0;
  position: absolute;
  right: 0;
  width: 100%;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const Center = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: ${(props) => (props.click ? "92%" : "50%")};
  outline: none;
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  transition: all 1s ease;
  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
  transform: translate(-50%, -50%);
`;

const LogoCenter = styled.img`
  background-image: url({img});
  height: 50%;
  width: 50%;
`;

const DarkDiv = styled.div`
  background-color: #090909;
  bottom: 0;
  height: ${(props) => (props.click ? "100%" : "0%")};
  position: absolute;
  right: 50%;
  top: 0;
  transition: height 0.5s ease, width 1s ease 0.5s;
  width: ${(props) => (props.click ? "50%" : "0%")};
  z-index: 1;

  ${(props) =>
    props.click
      ? mediaQueries(50)`
       height: 50%;
       right: 0;
       width: 100%;
       transition: width 0.5s ease, height 1s ease 0.5s;
  `
      : mediaQueries(50)`
       height: 0;
       width: 0;
  `};
`;

const Main = () => {
  const [click, setClick] = useState(false);
  const [path, setpath] = useState("");

  const handleClick = () => setClick(!click);

  const moveY = {
    y: "-100%",
  };
  const moveX = {
    x: `${path === "work" ? "100%" : "-100%"}`,
  };
  const mq = window.matchMedia("(max-width: 50em)").matches;

  return (
    <Suspense fallback={<Loading />}>
      <MainContainer
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={path === "about" || path === "skills" ? moveY : moveX}
        transition={{ duration: 0.5 }}
      >
        <DarkDiv click={click} />
        <Container>
          <PowerButton />
          {mq ? (
            <SocialIcons theme="light" />
          ) : (
            <SocialIcons theme={click ? "dark" : "light"} />
          )}
          <Center click={click}>
            <LogoCenter
              onClick={() => handleClick()}
              width={click ? 120 : 200}
              height={click ? 120 : 200}
              style={{ color: "inherit" }}
              img
              src={img}
            />
            <span></span>
          </Center>
          {mq ? (
            <Contact
              click={+click}
              target="_blank"
              href="mailto:isabelle.vall@gmail.com"
            >
              <motion.h3
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Say Bonjour-Hi
              </motion.h3>
            </Contact>
          ) : (
            <Contact
              click={+false}
              target="_blank"
              href="mailto:isabelle.vall@gmail.com"
            >
              <motion.h3
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Say Bonjour-Hi...
              </motion.h3>
            </Contact>
          )}
          {mq ? (
            <PROJECTS
              click={+click}
              onClick={() => setpath("projects")}
              to="/projects"
            >
              <motion.h3
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                PROJECTS.
              </motion.h3>
            </PROJECTS>
          ) : (
            <PROJECTS
              click={+false}
              onClick={() => setpath("projects")}
              to="/projects"
            >
              <motion.h3
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                PROJECTS.
              </motion.h3>
            </PROJECTS>
          )}
          <BottomBar>
            <ABOUT
              onClick={() => setClick(false)}
              click={mq ? +false : +click}
              to="/about"
            >
              <motion.h3
                onClick={() => setpath("about")}
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ABOUT ME.
              </motion.h3>
            </ABOUT>
            <SKILLS to="/skills">
              <motion.h3
                onClick={() => setpath("skills")}
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                MY SKILLS.
              </motion.h3>
            </SKILLS>
          </BottomBar>
        </Container>
        {click ? <Intro click={click} /> : null}
      </MainContainer>
    </Suspense>
  );
};

export default Main;
