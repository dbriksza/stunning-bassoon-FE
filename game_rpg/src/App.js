import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import "./App.css";

function App() {
  return (
    <AppWrapper>
      <Route exact path="/register" render={props => <Register {...props} />} />
      <Route exact path="/" render={props => <Login {...props} />} />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
`;

export default App;
