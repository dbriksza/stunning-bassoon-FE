import React from 'react';
import Room from "./Room";
import styled from "styled-components";


export default function Board(props) {
  const {blueprint} = props;
  return(
    <StyledDiv>
      {/* Map over blueprint and render cells */}
      {blueprint.map((maprow, index) => {
        let rowIndex = index
        return (
          <div className="row">
            {maprow.map((mapRoom, index) => {
              return (
                <Room key={`${rowIndex}-${index}`} value={mapRoom} />
              )
            })}
          </div>
        )
      })}
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 10px;

  .row {
    display: flex;
  }
`;