import styled, { ThemeProvider } from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import { LightTheme, mediaQueries } from "./Themes";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 0 125px;
  text-align: center;

  ${mediaQueries(80)`
    font-size: 1.75rem;
  `};

  ${mediaQueries(45)`
    font-size: 1.5rem;
    padding: 0 80px;
  `};

  ${mediaQueries(30)`
    font-size: 1.25rem;
    padding: 0 50px;
  `};

  ${mediaQueries(20)`
    font-size: 1rem;
    padding: 0 30px;
  `};
`;

const Number = styled.h1`
  font-family: "Montserrat", sans-serif;
  padding: 30px;

  ${mediaQueries(20)`
    font-size: 2rem;
  `};
`;

const Text = styled.h3`
  font-family: "Source Code Pro", sans-serif;

  ${mediaQueries(20)`
    font-size: 1.25rem;
  `};
`;

const NotFoundPage = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <PowerButton />
      <Container>
        <Number>404 Error</Number>
        <Text>
          This page does not exist.
          <br />
          <br />
          Click the Power button to go back home or put some music on 🎧.
        </Text>
      </Container>
    </ThemeProvider>
  );
};

export default NotFoundPage;
