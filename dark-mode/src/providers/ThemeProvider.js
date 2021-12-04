import React, { useCallback, useState } from "react";

export const ThemeContext = React.createContext();

export default function (props) {
  const [theme, setTheme] = useState("light");
  const { children } = props;

  const switchTheme = useCallback(() => {
    if (theme === "light-mode") {
      setTheme("dark-mode");
    } else {
      setTheme("light-mode");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, switchTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}
