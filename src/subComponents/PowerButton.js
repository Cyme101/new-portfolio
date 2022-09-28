// Home Button
import React from "react";
import styled from "styled-components";
import { PowerBtn } from "../components/AllSvgs";

const Power = styled.button`
  align-items: center;
  background-color: #f1eadc;
  border: 2px solid #090909;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 3rem;
  justify-content: center;
  left: 50%;
  padding: 0.4rem;
  position: fixed;
  top: 2rem;
  transform: translate(-50%, 0);
  width: 3rem;
  z-index: 4;

  &:hover {
    background-color: rgba(0, 255, 245, 0.4);
  }
`;

const PowerButton = () => {
  return (
    <Power>
      <PowerBtn height={30} width={30} fill="currentColor" />
    </Power>
  );
};

export default PowerButton;
