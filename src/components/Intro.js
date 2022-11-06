import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Portrait from "../assets/img/profile-img.png";
import { mediaQueries } from "./Themes";

const IntroBox = styled(motion.div)`
  display: flex;
  left: 50%;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 55vw;
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

  ${mediaQueries(1200)`
    width: 65vw;
  `};

  ${mediaQueries(60)`
    width: 70vw;
  `};

  ${mediaQueries(50)`
    width: 50vw;
    background-size: 100% 2px;
    flex-direction: column;
    justify-content: space-between;
  `};

  ${mediaQueries(40)`
    width: 60vw;
  `};

  ${mediaQueries(30)`
    width: 70vw;
  `};

  ${mediaQueries(20)`
    width: 60vw;
  `};

  @media only screen and (max-width: 50em) {
    background: none;
    border: none;
    border-top: 2px solid ${(props) => props.theme.body};
    border-bottom: 2px solid ${(props) => props.theme.text};
    background-image: linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      ),
      linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      );
    background-size: 2px 100%;
    background-position: 0 0, 100% 0;
    background-repeat: no-repeat;
  }
`;

const IntroSubBox = styled.div`
  display: flex;
  position: relative;
  width: 50%;

  .pic {
    bottom: 5%;
    height: auto;
    left: 50%;
    position: absolute;
    transform: translate(-50%, 0%);
    width: 90%;
  }

  ${mediaQueries(50)`
    width: 100%;
    height: 50%;
      .pic {
        width: 70%;
      }
  `};

  ${mediaQueries(40)`
    .pic {
      width: 80%;
    }
  `};

  ${mediaQueries(30)`
    .pic {
      width: 90%;
    }
  `};

  ${mediaQueries(20)`
     .pic {
       width: 80%;
     }
  `};
`;

const IntroText = styled(motion.div)`
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

    ${mediaQueries(40)`
      font-size: calc(0.5rem + 1vw);
    `};
  }

  ${mediaQueries(30)`
    font-size: calc(1rem + 1.5vw);
  `};

  ${mediaQueries(20)`
    padding: 1rem;
  `};
`;

const Intro = () => {
  const [height, setHeight] = useState("55vh");

  useEffect(() => {
    if (window.matchMedia("(max-width: 50em)").matches) {
      setHeight("70vh");
    }
    if (window.matchMedia("(max-width: 20em)").matches) {
      setHeight("60vh");
    }
  }, []);
  return (
    <IntroBox
      initial={{ height: 0 }}
      animate={{ height: height }}
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
