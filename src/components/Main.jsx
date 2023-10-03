import React, { useState } from "react";
import Header from "./Header.jsx";
import { StyleProvider } from "../contexts/StyleContext.js";
import Greeting from "./Greeting.jsx";
import Skills from "./Skills.jsx";
import Education from "./Education.jsx";
import WorkExperience from "./WorkExperience/index.jsx";

const Main = () => {
  const [isDark, setIsDark] = useState(true);

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
      </StyleProvider>
    </div>
  );
};

export default Main;
