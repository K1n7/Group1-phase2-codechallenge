import { createContext, useState, useContext } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [board, setBoard] = useState(Array(15).fill(Array(15).fill(null))); // 15x15 board
    const [rack, setRack] = useState(["A", "T", "E", "R", "S", "C", "L"]); // Sample tiles
    const [score, setScore] = useState(0);

    return (
        <GameContext.Provider value={{ board, setBoard, rack, setRack, score, setScore }}>
            {children}
        </GameContext.Provider>
    );
};

export const useGame = () => useContext(GameContext);
