import React from "react";
import styled from "styled-components";
import PowerButton from "../subComponents/PowerButton";

const MainContainer = styled.div`
  background: ${(props) => props.theme.text};
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

const Main = () => {
  return (
    <div>
      <MainContainer>
        <Container>
          <PowerButton/>
        </Container>
      </MainContainer>
    </div>
  );
};

export default Main;
