import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GitHub } from "../components/AllSvgs";

const Box = styled(motion.li)`
  height: 40vh;
  background-color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.body};
  border-radius: 0 30px 0 30px;
  color: ${(props) => props.theme.body};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 3rem;
  padding: 1.75rem 2rem;
  transition: all 0.2s ease;
  width: 16rem;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
`;

const Description = styled.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`;

const Tags = styled.div`
  display: flex;
  border-top: 2px solid ${(props) => props.theme.body};
  flex-wrap: wrap;
  line-height: 1.5rem;
  padding-top: 1rem;
  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;

const Tag = styled.span`
  font-size: calc(0.8em + 0.3vw);
  margin-right: 1rem;
`;

const Footer = styled.footer`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Link = styled(NavLink)`
  background-color: ${(props) => props.theme.body};
  border-radius: 0 0 0 20px;
  color: ${(props) => props.theme.text};
  font-size: calc(1em + 0.5vw);
  padding: 0.5rem calc(2rem + 2vw);
  text-decoration: none;
  ${Box}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

const Git = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  ${Box}:hover & {
    & > * {
      fill: ${(props) => props.theme.text};
    }
  }
`;

const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const Card = (props) => {
  const { id, name, description, tags, demo, github } = props.data;

  return (
    <Box key={id} variants={Item}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Tags>
        {tags.map((t, id) => {
          return <Tag key={id}>#{t}</Tag>;
        })}
      </Tags>
      <Footer>
        <Link to={{ pathname: `${demo}` }} target="_blank">
          Visit
        </Link>
        <Git to={{ pathname: `${github}` }} target="_blank">
          <GitHub width={40} height={40} />
        </Git>
      </Footer>
    </Box>
  );
};

export default Card;
