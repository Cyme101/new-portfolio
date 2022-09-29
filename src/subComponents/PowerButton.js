// Home Button
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { PowerBtn } from "../components/AllSvgs";

const Power = styled.button`
  align-items: center;
  background-color: #f1eadc;
  border: 2px solid #090909;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 2.5rem;
  justify-content: center;
  left: 50%;
  padding: 0.4rem;
  position: fixed;
  top: 2rem;
  transform: translate(-50%, 0);
  width: 2.5rem;
  z-index: 4;

  &:hover {
    background-color: rgba(0, 255, 245, 0.4);
  }

  & > *:first-child {
    color: inherit;
    text-decoration: none;
  }
`;

const PowerButton = () => {
  return (
    <Power>
      <NavLink to="/">
        <PowerBtn height={30} width={30} fill="currentColor" />
      </NavLink>
    </Power>
  );
};

export default PowerButton;
