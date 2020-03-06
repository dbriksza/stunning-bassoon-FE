import React from "react";
import { Route } from "react-router-dom";

// page components for each route
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Game from "./components/Game";

// styles
import styled from "styled-components";

function App() {
  return (
    <AppWrapper>
      <Route exact path="/game" render={props => <Game {...props} />} />
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
