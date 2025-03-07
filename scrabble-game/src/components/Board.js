import React from 'react';
import Tile from './Tile';

const Board = ({ board, onTileClick }) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((tile, colIndex) => (
            <Tile
              key={`${rowIndex}-${colIndex}`}
              letter={tile.letter}
              value={tile.value}
              onClick={() => onTileClick(rowIndex, colIndex)}
              isSelected={tile.isSelected}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;