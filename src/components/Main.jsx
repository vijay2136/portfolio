import React from "react";
import Header from "./Header.jsx";
import { StyleProvider } from "../contexts/StyleContext.js";
import Greeting from "./Greeting.jsx";
import Skills from "./Skills.jsx";
import Education from "./Education.jsx";
import WorkExperience from "./WorkExperience/index.jsx";
import Contact from "./Contact.jsx";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark, changeTheme }}>
        <Header />
        <Greeting />
        <Skills />
        <Education />
        <WorkExperience />
        <Contact />
      </StyleProvider>
    </div>
  );
};

export default Main;
