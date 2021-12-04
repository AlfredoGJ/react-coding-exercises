import React, { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";


export default function App({ children }) {
  
  const themeContext =  useContext(ThemeContext)
  return <div className={themeContext[0]}> {children};</div>;
}
