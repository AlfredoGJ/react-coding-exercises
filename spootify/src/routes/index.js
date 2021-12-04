import React from "react";
import Discover from "./Discover";
import { Route } from "react-router";
import {BrowserRouter } from 'react-router-dom'

export default function Routes() {
  // Here you'd return an array of routes
  return (
    <BrowserRouter basename = "/">
      <Route path="discover">
        <Discover/> 
      </Route>
      <Route path = "nothing" render = {() => <Discover/>}>
        
      </Route>
    </BrowserRouter>
  );
}
