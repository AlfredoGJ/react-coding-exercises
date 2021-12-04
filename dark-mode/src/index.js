import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./common/containers/App";
import "./styles/_main.scss";
import Routes from "./routes";
import ThemeProvider from "./providers/ThemeProvider";

ReactDOM.render(
  <ThemeProvider>
    <AppContainer>
      <Routes />
    </AppContainer>
  </ThemeProvider>,
  document.getElementById("root")
);
