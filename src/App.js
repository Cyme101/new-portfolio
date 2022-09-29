import { Route, Routes, useLocation } from "react-router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { LightTheme } from "./components/Themes";

import Main from "./components/Main";
import AboutMePage from "./components/AboutMePage";
import ResumePage from "./components/MySkillsPage";
import MySkillsPage from "./components/MySkillsPage";
import ProjectsPage from "./components/ProjectsPage";

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={LightTheme}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/skills" element={<MySkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
