import React from 'react';
import Room from "./Room";
import styled from "styled-components";


export default function Board(props) {
  const {blueprint} = props.gameData;
  const {board} = props.gameData;

/* 
board is an array of objects. each object is a room. each room looks like this:
{
  room_id: 407
  x_coord: 7
  y_coord: 0
  players: [id of player in room]
  point_value: 90
}
*/
  return(
    <StyledDiv>
      {/* Map over blueprint and render cells */}
      {blueprint.map((maprow, index) => {
        let rowIndex = index
        return (
          <div key={rowIndex} className="row">
            {maprow.map((mapRoom, index) => {
              const room = board 
                ? board.find(element => element.y_coord === rowIndex && element.x_coord === index)
                : null
              console.log(room, `y ${rowIndex} and x ${index}`)

              return (
                <Room key={`${rowIndex}-${index}`} value={mapRoom} room={room} />
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