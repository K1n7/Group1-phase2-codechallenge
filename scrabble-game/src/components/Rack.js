import React from 'react';
import Tile from './Tile';

const Rack = ({ rack, onTileClick }) => {
  return (
    <div className="rack">
      {rack.map((tile, index) => (
        <Tile
          key={index}
          letter={tile.letter}
          value={tile.value}
          onClick={() => onTileClick(index)}
          isSelected={tile.isSelected}
        />
      ))}
    </div>
  );
};

export default Rack;