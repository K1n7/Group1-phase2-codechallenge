import React from "react";
import "./Board.css";

const Board = () => {
  const boardSize = 15;
  const renderTiles = ( ) => {
    let tiles = [];
    for (let row = 0; row < boardsize; row++) {
      for (let col = 0; col < boardsize; col++) {
        tiles.push(
          <div
            key={'${row}-${col}'}
            className={'tile ${(row + col) % 2 ===
0 ? "light-tile" : "dark-tile"} '}
            data-row={row}
            data-col={col}
            ></div>
          );
      }
    }
    return tiles;
  };
  return <div className="board">{renderTiles()}</div>;
};
export default Board;
