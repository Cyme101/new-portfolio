import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { GitHub, LinkedIn, Twitter } from "../components/AllSvgs";
import { DarkTheme } from "../components/Themes";

const Icons = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 2rem;
  position: fixed;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  height: 8rem;
  width: 2px;
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://www.linkedin.com/in/isabelle-vallerand/" }}
        >
          <LinkedIn height={25} width={25} fill="currentColor" />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/Cyme101" }}
        >
          <GitHub height={25} width={25} fill="currentColor" />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://twitter.com/IzabelVall" }}
        >
          <Twitter height={25} width={25} fill="currentColor" />
        </NavLink>
      </motion.div>
      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
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
