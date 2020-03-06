// control for sending player movment roll 'POST' requests and move 'POST' requests

import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import { movePlayer } from "../store/actions/gameActions";

const Controls = props => {
  const move = direction => {
    //takes board, playerpostion and direction
    movePlayer(props.board, "playerposition", direction);
  };

  return (
    <StyledControls>
      <p>Controls</p>
      <section>
        <div className="direction-container">
          <div>
            <Button onClick={() => move("n")} color="secondary">
              N
            </Button>
          </div>
          <div className="west-east">
            <div>
              <Button onClick={() => move("w")} color="secondary">
                W
              </Button>
            </div>
            <div>
              <Button onClick={() => move("e")} color="secondary">
                E
              </Button>
            </div>
          </div>
          <div>
            <Button onClick={() => move("s")} color="secondary">
              S
            </Button>
          </div>
        </div>
        <div>
          <Button size="sm" color="success">
            Roll Dice
          </Button>
          <div>
            <ButtonGroup>
              <Button size="sm" outline color="primary">
                Join
              </Button>
              <Button size="sm" outline color="danger">
                Exit
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </section>
    </StyledControls>
  );
};

//;

const StyledControls = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  background-color: #fff;
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 60%;

  section {
    border-top: 1px solid lightgrey;
    padding-top: 5px;
    display: flex;
    align-items: center;
    min-width: 100%;
    justify-content: space-around;
  }

  .direction-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      min-width: 0.75rem;
      margin: 0.1rem;
    }
  }
  div {
    cursor: pointer;
  }

  .west-east {
    display: flex;
    button {
      min-width: 40px;
    }
  }

  .btn.btn-success {
    border-radius: 50%;
    padding: 30px 12px;
    margin-bottom: 0.5rem;
  }
`;

const mapStateToProps = state => {
  return {
    board: state.game.board
  };
};

export default connect(mapStateToProps, { movePlayer })(Controls);
