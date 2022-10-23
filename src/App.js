import { Route, Routes, useLocation } from "react-router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { LightTheme } from "./components/Themes";

import Main from "./components/Main";
import AboutMePage from "./components/AboutMePage";
import MySkillsPage from "./components/MySkillsPage";
import ProjectsPage from "./components/ProjectsPage";
import Audio from "./subComponents/Audio";

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={LightTheme}>
        <Audio />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/skills" element={<MySkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
