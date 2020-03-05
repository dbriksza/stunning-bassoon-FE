import React from "react";

// pusher
import Pusher from 'pusher-js';

// app
import Game from "./components/gameboard/Game";
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
    <div>
      <Game />
    </div>
  );
}

export default App;
