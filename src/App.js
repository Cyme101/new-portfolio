import { Route, Routes, useLocation } from "react-router";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import GlobalStyle from "./globalStyles";
import { LightTheme } from "./components/Themes";
import Loading from "./subComponents/Loading";

const Main = lazy(() => import("./components/Main"));
const AboutMePage = lazy(() => import("./components/AboutMePage"));
const MySkillsPage = lazy(() => import("./components/MySkillsPage"));
const ProjectsPage = lazy(() => import("./components/ProjectsPage"));
const Audio = lazy(() => import("./subComponents/Audio"));

function App() {
  const location = useLocation();

  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={LightTheme}>
        <Suspense fallback={<Loading />}></Suspense>
        <Audio />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<AboutMePage />} />
            <Route path="/skills" element={<MySkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
