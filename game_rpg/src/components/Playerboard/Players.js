// player scoreboard and turn tracking component here
import React from 'react';
import styled from "styled-components";

export default function Players(props) {
  return (
    <StyledDiv>
      <p>Game has not started. 0 players online</p>
      <div className="scoreboard">
        <div className="player">Player 1</div>
        <div className="player">Player 2</div>
        <div className="player">Player 3</div>
        <div className="player">Player 4</div>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;

  .scoreboard {
    display: flex;
    flex-flow: row wrap;
    .player {
      width: 50%;
      text-align: center;
    }
  }
`;