import React from 'react';

const Tile = ({ letter, value, onClick, isSelected }) => {
  return (
    <div className={`tile ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      {letter && (
        <>
          <span className="letter">{letter}</span>
          <span className="value">{value}</span>
        </>
      )}
    </div>
  );
};

export default Tile;