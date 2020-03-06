import React, { useEffect} from 'react';
// redux
import { connect } from "react-redux";
import { getGame } from "../store/actions/gameActions";
// pusher
import Pusher from "pusher-js";
// components
import Board from "./Gameboard/Board";
import Players from "./Playerboard/Players";
import Controls from "./Controls/Controls";
// styles
import styled from "styled-components";
import backgroundImg from "../assets/background-image.jpg";

// initialize pusher
const pusher = new Pusher('0805c1e228898d83231c', {
  cluster: 'us2',
  forceTLS: true
});

// player pusher updates
const playerChannel = pusher.subscribe('player-channel');

playerChannel.bind('player-joined', function(data) {
  alert(JSON.stringify(data));
});

playerChannel.bind('player-left', function(data) {
  alert(JSON.stringify(data));
});

playerChannel.bind('start-game', function(data) {
  alert(JSON.stringify(data));
});

playerChannel.bind('update-world', function(data) {
  alert(JSON.stringify(data));
});

// board pusher updates
const boardChannel = pusher.subscribe('board-channel');

boardChannel.bind('start-game', function(data) {
  alert(JSON.stringify(data));
});

boardChannel.bind('update-world', function(data) {
  alert(JSON.stringify(data));
});

boardChannel.bind('end-game', function(data) {
  alert(JSON.stringify(data));
});

// Game component
function Game(props) {
  const { getGame } = props;

  useEffect(() => {
    getGame()
  }, [getGame]);

  if (props.game.isLoading) {
    return(
      <h2>Loading the game...</h2>
    )
  }

  if (props.game.isSuccessful){
    return(
      <StyledDiv>
        <div className="game">
          <Players playerData={props.game.playerData} />
          <Board gameData={props.game.gameData} />
          <Controls />
        </div>
      </StyledDiv>
    )

  }

  else {
    return(<p>ERROR</p>)
  }
}

const StyledDiv = styled.div`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;

  .game {
    max-width: 470px;
    border-radius: 1.25rem;
    display: flex;
    margin: auto;
    flex-direction: column;
    background: rgb(229, 72, 72);
    min-width: 40%;
    padding: 1rem;
  }
`;

const mapStateToProps = state => {
  return {
    game: {
      gameData: state.game.gameData,
      playerData: state.game.playerData,
      board: state.game.board,
      isSuccessful: state.game.isSuccessful,
      isLoading: state.game.isLoading,
      isError: state.game.isError,
      errorMessage: state.game.errorMessage
    }
  }
}

export default connect(
  mapStateToProps,
  { getGame }
)(Game)