import React, { useEffect} from 'react';
import { connect } from "react-redux";
import { getGame } from "../store/actions/gameActions";
import Board from "./Gameboard/Board"

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
      <div className="game">
        {/* <Player /> */}
        <Board blueprint={props.game.board} />
        {/* <Controls /> */}
      </div>
    )

  }

  else {
    return(<p>ERROR</p>)
  }
}
const mapStateToProps = state => {
  return {
    game: {
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