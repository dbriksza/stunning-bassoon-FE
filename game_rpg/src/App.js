import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

// pusher
import Pusher from 'pusher-js';

// app

import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Game from "./components/Game";
import "./App.scss";

const pusher = new Pusher('0805c1e228898d83231c', {
  cluster: 'us2',
  forceTLS: true
});

const channel = pusher.subscribe('game-channel');

channel.bind('update-world', function(data) {
  alert(JSON.stringify(data));
});

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
