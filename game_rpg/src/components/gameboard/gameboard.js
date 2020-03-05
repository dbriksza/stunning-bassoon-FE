import React, { useEffect} from 'react';
import { connect } from "react-redux";
import { startGame } from "../../store/actions/gameActions";

function GameBoard(props) {
  const { startGame } = props;

  useEffect(() => {
    startGame()
  }, [props.game.isLoading, startGame]);

  if (props.game.isLoading) {
    return(
      <h2>Loading the game...</h2>
    )
  }

  return(
    <p>props.game.board</p>
  )
}
const mapStateToProps = state => {
  return {
    game: {
      board: state.game.board,
      isError: state.game.isError,
      isLoading: state.game.isLoading,
      errorMessage: state.game.errorMessage
    }
  }
}

export default connect(
  mapStateToProps,
  { startGame }
)(GameBoard)