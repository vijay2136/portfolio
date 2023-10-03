import React, { useState } from "react";
import Header from "./Header.jsx";
import { StyleProvider } from "../contexts/StyleContext.js";
import Greeting from "./Greeting.jsx";

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
      </StyleProvider>
    </div>
  );
};

export default Main;
