import React from "react";
import styled from "styled-components";
import { LinkedIn, GitHub, Twitter } from "../components/AllSvgs";
import { LightTheme } from "../components/Themes";

const Icons = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 2rem;
  position: fixed;
  z-index: 4;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  background-color: ${(props) =>
    props.color === "light" ? LightTheme.text : LightTheme.body};
  height: 10rem;
  width: 2px;
`;

const SocialIcons = () => {
  return (
    <Icons>
      <div>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
          href="https://linkedin.com/in/isabelle-vallerand"
        >
          <LinkedIn height={30} width={30} fill="currentColor" />
        </a>
      </div>
      <div>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Cyme101"
        >
          <GitHub height={30} width={30} fill="currentColor" />
        </a>
      </div>
      <div>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/IzabelVall"
        >
          <Twitter height={30} width={30} fill="currentColor" />
        </a>
      </div>
      <Line />
    </Icons>
  );
};

export default SocialIcons;
