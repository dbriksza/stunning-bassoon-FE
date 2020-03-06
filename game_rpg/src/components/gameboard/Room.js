import React from 'react';
import styled from "styled-components";

export default function Room(props) {
  // value is 0 or 1 for obstacle or room
  const {value} = props;
  const className =
    "cell" +
    // if value is 0 add obstacle class
    (value === 0 ? " obstacle" : "")

  return(
    <StyledDiv>
      <div className={className}></div>      
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
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
`;