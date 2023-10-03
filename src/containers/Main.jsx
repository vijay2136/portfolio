import React, { useState } from "react";
import Header from "../components/Header.jsx";
import { StyleProvider } from "../contexts/StyleContext";

const Main = () => {
  const [isDark, setIsDark] = useState(true);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark, changeTheme }}>
        <Header />
      </StyleProvider>
    </div>
  );
};

export default Main;
