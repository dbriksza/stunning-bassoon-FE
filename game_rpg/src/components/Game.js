import React, { useEffect} from 'react';
import { connect } from "react-redux";
import { getGame } from "../store/actions/gameActions";
import Board from "./Gameboard/Board";
import Players from "./Playerboard/Players";
import styled from "styled-components";
import backgroundImg from "../assets/background-image.jpg";

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
          <Players />
          <Board blueprint={props.game.board} />
          {/* <Controls /> */}
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
    
    div:last-child {
      display: flex;
    }
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
  }
  button:nth-of-type(1) {
    margin: 0 auto;
    width: 60%;
  }
   p {
    flex: 2;
    margin: 0;
    min-width: 50%;
    padding: 6px 0;
    
  }
  .btn.btn-link {
    flex: 1;
    padding: 6px 0;
  }
`;

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