import React, { useEffect} from 'react';
import Room from "./Room"

export default function Board(props) {
  const {blueprint} = props;
  return(
    <div className="board">
        <div className="game-info">
            <h1 className="info">Game has not started. 0 players online</h1>
            <span className="info">Point totals</span>
        </div>
        <div>
          {/* Map over blueprint and render cells */}
          {blueprint.map((maprow, index) => {
            let rowIndex = index
            return maprow.map((mapRoom, index) => {
              return (
                <div key={`${rowIndex}-${index}`}>
                  <Room value={mapRoom} />
                </div>
              )
            })
          })}
        </div>
    </div>
  )
}
// Board Class
// class Board extends React.Component {
//   state = {
//         boardData: this.initBoardData(this.props.height, this.props.width, this.props.mines),
//         gameStatus: "Game in progress",
//         mineCount: this.props.mines,
//     };

//     renderBoard(data) {
//         return data.map((datarow) => {
//             return datarow.map((dataitem) => {
//                 return (
//                     <div key={dataitem.x * datarow.length + dataitem.y}>
//                         <Cell
//                             onClick={() => this._handleCellClick(dataitem.x, dataitem.y)}
//                             cMenu={(e) => this._handleContextMenu(e, dataitem.x, dataitem.y)}
//                             value={dataitem}
//                         />
//                         {(datarow[datarow.length - 1] === dataitem) ? <div className="clear" /> : ""}
//                     </div>);
//             })
//         });

//     }