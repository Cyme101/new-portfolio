import { motion } from "framer-motion";
import styled from "styled-components";
import { LinkedIn, GitHub, Twitter } from "../components/AllSvgs";
import { LightTheme, mediaQueries } from "../components/Themes";

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

    ${mediaQueries(20)`
      margin: 0.3rem 0;
  `};
  }

  ${mediaQueries(40)`
  left: 1rem;
      svg{
        width:20px;
        height:20px
      }

  `};
`;

const Line = styled(motion.span)`
  background-color: ${(props) =>
    props.color === "light" ? LightTheme.text : LightTheme.body};
  height: 8rem;
  width: 2px;
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <a
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
      </a>
      <a
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
      </a>
      <a
        style={{ color: "inherit" }}
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/IzabelVall"
      >
        <Twitter
          width={30}
          height={30}
          fill={props.theme === "light" ? LightTheme.text : LightTheme.body}
        />
      </a>
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
