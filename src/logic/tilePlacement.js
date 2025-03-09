export const placeTile = (board, row, col, tile, setBoard) => {
    if (!isValidPlacement(board, row, col)) {
        console.log("Invalid tile placement! Ensure the spot is empty and adjacent to another tile.");
        return;
    }

    const newBoard = board.map((r, i) => r.map((cell, j) => (i === row && j === col ? tile : cell)));
    setBoard(newBoard);
    updateGameState(newBoard);
};

const isValidPlacement = (board, row, col) => {
    if (row < 0 || col < 0 || row >= board.length || col >= board[row].length) return false;
    if (board[row][col] !== null) return false;
    if (board.flat().every(cell => cell === null)) return true;

    const directions = [
        [0, 1], [1, 0], [0, -1], [-1, 0]
    ];
    return directions.some(([dx, dy]) => board[row + dx]?.[col + dy] !== null);
};

const updateGameState = async (newBoard) => {
    try {
        const response = await fetch("http://localhost:5000/gameState", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ board: newBoard }),
        });
        if (!response.ok) throw new Error(`Server responded with status: ${response.status}`);
        console.log("Game state updated.");
    } catch (error) {
        console.error("Error updating game state:", error);
    }
};