import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import img from "../assets/img/logo.png";

const MainContainer = styled.div`
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
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute;
  right: calc(1rem + 2vw);
  text-decoration: none;
  top: 2rem;
  z-index: 1;
`;

const TROOPL = styled.a`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;

const PROJECTS = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  left: calc(1rem + 2vw);
  position: absolute;
  text-decoration: none;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 1;
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
  height: 70%;
  width: 70%;
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
`;

const Main = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div>
      <MainContainer>
        <DarkDiv click={click} />
        <Container>
          <PowerButton />
          <SocialIcons theme={click ? "dark" : "light"} />
          <Center click={click}>
            <LogoCenter
              onClick={() => handleClick()}
              width={click ? 120 : 200}
              height={click ? 120 : 200}
              style={{ color: "inherit" }}
              rel="noreferrer"
              img
              src={img}
            />
            <h3>Click Here!</h3>
          </Center>
          <Contact
            style={{ color: "inherit" }}
            target="_blank"
            rel="noreferrer"
            href="mailto:isabelle.vall@gmail.com"
          >
            <h3>Say Bonjour-Hi...</h3>
          </Contact>
          <TROOPL
            style={{ color: "inherit" }}
            target="_blank"
            rel="noreferrer"
            href="https://troopl.com/isabellevallerand"
          >
            <h3>TROOPL.</h3>
          </TROOPL>
          <PROJECTS
            style={{ color: "inherit" }}
            target="_blank"
            rel="noreferrer"
            to="/projects"
            click={+click}
          >
            <h3>PROJECTS.</h3>
          </PROJECTS>
          <BottomBar>
            <ABOUT
              style={{ color: "inherit" }}
              target="_blank"
              rel="noreferrer"
              to="/about"
              click={+click}
            >
              <h3>ABOUT ME.</h3>
            </ABOUT>
            <SKILLS
              style={{ color: "inherit" }}
              target="_blank"
              rel="noreferrer"
              to="/skills"
              click={+click}
            >
              <h3>MY SKILLS.</h3>
            </SKILLS>
          </BottomBar>
        </Container>
      </MainContainer>
    </div>
  );
};

export default Main;
