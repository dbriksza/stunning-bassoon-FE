import React from 'react';

export default function Room(props) {
  // value is 0 or 1 for obstacle or room
  const {value} = props;
  const className =
    "cell" +
    // if value is 0 add obstacle class
    (value == 0 ? " obstacle" : "")

  return(
    <div
      className={className}
    >      
    </div>
  )
}