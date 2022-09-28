import { Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { LightTheme } from "./components/Themes";
import Main from "./components/Main";
import AboutMePage from "./components/AboutMePage";
import ProjectsPage from "./components/ProjectsPage";
import MySkillsPage from "./components/MySkillsPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={LightTheme}>
        <Routes>
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
