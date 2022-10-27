import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { LinkedIn, GitHub, Twitter } from "../components/AllSvgs";
import { LightTheme } from "../components/Themes";

const Icons = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 5rem;
  position: fixed;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 1rem 0;
  }
`;

const Line = styled(motion.span)`
  background-color: ${(props) =>
    props.color === "light" ? LightTheme.text : LightTheme.body};
  height: 10rem;
  width: 2px;
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <NavLink
        style={{ color: "inherit" }}
        target="_blank"
        rel="noreferrer"
        href="https://linkedin.com/in/isabelle-vallerand"
      >
        <LinkedIn
          width={30}
          height={30}
          fill={props.theme === "light" ? LightTheme.text : LightTheme.body}
        />
      </NavLink>
      <NavLink
        style={{ color: "inherit" }}
        target="_blank"
        rel="noreferrer"
        href="https://github.com/Cyme101"
      >
        <GitHub
          width={30}
          height={30}
          fill={props.theme === "light" ? LightTheme.text : LightTheme.body}
        />
      </NavLink>
      <NavLink
        style={{ color: "inherit" }}
        target="_blank"
        rel="noreferrer"
        to={{ pathname: "https://twitter.com/IzabelVall" }}
      >
        <Twitter
          width={30}
          height={30}
          fill={props.theme === "light" ? LightTheme.text : LightTheme.body}
        />
      </NavLink>
      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "10rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
