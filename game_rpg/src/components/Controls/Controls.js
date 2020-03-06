// control for sending player movment roll 'POST' requests and move 'POST' requests

import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import styled from "styled-components";

const Controls = props => {
  return (
    <StyledControls>
      <p>Controls</p>
      <section>
        <div className="direction-container">
          <div>
            <Button color="secondary">N</Button>
          </div>
          <div className="west-east">
            <div>
              <Button color="secondary">W</Button>
            </div>
            <div>
              <Button color="secondary">E</Button>
            </div>
          </div>
          <div>
            <Button color="secondary">S</Button>
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

export default Controls;
