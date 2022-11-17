import styled, { ThemeProvider } from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import { LightTheme, mediaQueries } from "./Themes";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  margin: 0 125px;

  ${mediaQueries(20)`
    font-size: calc(1rem + 2vw);
    padding: 1rem;
  `};
`;

const Number = styled.h1`
  font-family: "Montserrat", sans-serif;
  padding: 30px;
`;

const Text = styled.h3`
  font-family: "Source Code Pro", sans-serif;
  text-align: center;
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
