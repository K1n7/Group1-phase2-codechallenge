import React from "react";

const Player = ({ name, score, isCurrent }) => {
  return (
    <div className={`p-4 border rounded-lg ${isCurrent ? "bg-green-300" : "bg-white"}`}>
      <h3 className="font-bold">{name}</h3>
      <p>Score: {score}</p>
      {isCurrent && (
        <div className="mt-2">
          <button className="px-2 py-1 bg-yellow-500 text-white rounded">Pass</button>
          <button className="ml-2 px-2 py-1 bg-red-500 text-white rounded">Swap Tiles</button>
        </div>
      )}
    </div>
  );
};

export default Player;
