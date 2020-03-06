import React from 'react';
import styled from "styled-components";

export default function Room(props) {
  // value is 0 or 1 for obstacle or room
  const {value, room} = props;
  const className =
    "cell" +
    // if value is 0 add obstacle class
    (value === 0 ? " obstacle" : "")

  if(room){
    console.log(room.players)
    return(
      <StyledDiv>
        <div className={className}>
          {room ? room.point_value : null}  
        </div>
        {room.players.length 
          ? <div className={`player p0`} /> : null}
      </StyledDiv>
    )
  } else {
    return(
      <StyledDiv>
        <div className={className}>
        </div>
      </StyledDiv>
    )

  }
}

const StyledDiv = styled.div`
  position: relative;

  .cell {
    background: #FCFAF9;
    border: 1px solid rgb(229, 72, 72);;
    border-radius: 4px;
    float: left;
    line-height: 35px;
    height: 35px;
    text-align: center;
    width: 35px;
    cursor: pointer;
    color: #333333;
    font-weight: 600;

    &:focus {
      outline: none;
    }
  }

  .obstacle {
    background: #333333;
  }

  .player {
    position: absolute;
    top: 5px;
    left: 5px;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    font-weight: bold;
  }

  .p0 {
    background-color: red;
  }

  .p1 {
    background-color: blue;
  }

  .p3 {
    background-color: green;
  }

  .p4 {
    background-color: purple;
  }
`;