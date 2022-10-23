import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Portrait from "../assets/img/profile-img.png";

const IntroBox = styled(motion.div)`
  display: flex;
  height: 55vh;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 1;
`;

const IntroSubBox = styled.div`
  display: flex;
  position: relative;
  width: 50%;

  .pic {
    bottom: 0;
    height: auto;
    left: 50%;
    position: absolute;
    transform: translate(-50%, 0%);
    width: 85%;
  }
`;

const IntroText = styled.div`
  color: ${(props) => props.theme.body};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: calc(1em + 1.5vw);
  padding: 2rem;
  justify-content: space-evenly;
  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;

const Intro = () => {
  return (
    <IntroBox
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <IntroSubBox>
        <IntroText>
          <h1>Bonjour-Hi,</h1>
          <h2>I'm Isabelle.</h2>
          <h6>I'm passionate about creating stylish websites.</h6>
        </IntroText>
      </IntroSubBox>
      <IntroSubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Portrait} alt="Profile Pic" />
        </motion.div>
      </IntroSubBox>
    </IntroBox>
  );
};

export default Intro;
