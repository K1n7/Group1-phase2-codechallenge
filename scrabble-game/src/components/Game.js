import React, { useState, useEffect } from 'react';
import Board from './Board';
import Rack from './Rack';
import { getBoard, updateBoard, getPlayers, updatePlayer } from '../api';

const initialRack = [
  { letter: 'A', value: 1, isSelected: false },
  { letter: 'B', value: 3, isSelected: false },
  // Add more initial tiles as needed
];

const Game = () => {
  const [board, setBoard] = useState([]);
  const [rack, setRack] = useState(initialRack);
  const [players, setPlayers] = useState([]);
  const [selectedTile, setSelectedTile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const boardData = await getBoard();
      setBoard(boardData);

      const playersData = await getPlayers();
      setPlayers(playersData);
    };

    fetchData();
  }, []);

  const handleTileClick = (row, col) => {
    if (selectedTile) {
      const newBoard = [...board];
      newBoard[row][col] = { ...selectedTile, isSelected: false };
      setBoard(newBoard);
      updateBoard(newBoard);
      setSelectedTile(null);
    }
  };

  const handleRackTileClick = (index) => {
    const newRack = [...rack];
    const tile = newRack[index];

    if (tile.isSelected) {
      tile.isSelected = false;
      setSelectedTile(null);
    } else {
      newRack.forEach((t) => (t.isSelected = false));
      tile.isSelected = true;
      setSelectedTile(tile);
    }

    setRack(newRack);
  };

  return (
    <div className="game">
      <Board board={board} onTileClick={handleTileClick} />
      <Rack rack={rack} onTileClick={handleRackTileClick} />
      <button>Shuffle</button>
      <button>Pass</button>
      <button>Swap Tiles</button>
    </div>
  );
};

export default Game;