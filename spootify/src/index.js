import React from "react";
import ReactDOM from "react-dom";
import CoreLayout from "./common/layouts/CoreLayout";
import "./styles/_main.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Discover from "./routes/Discover";


import SessionProvider from "./common/providers/SessionProvider";
import SessionHandler from "./common/components/SessionHandler/SessionHandler";

ReactDOM.render(
  <React.StrictMode>
    <CoreLayout>
      <BrowserRouter basename="/">
        <SessionProvider>
          <Route path="/">
            <SessionHandler>
              <Discover />
            </SessionHandler>
          </Route>
          <Route path="/tugfa"></Route>
        </SessionProvider>
      </BrowserRouter>
    </CoreLayout>
  </React.StrictMode>,
  document.getElementById("root")
);
